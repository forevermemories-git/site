import { chromium } from '@playwright/test';

async function auditApprofondi() {
  console.log('🔍 Audit approfondi UX et Accessibilité...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const findings = {
    critical: [],
    important: [],
    suggestions: [],
    good: []
  };

  try {
    // Test accessibilité
    console.log('♿ Test d\'accessibilité...');
    await page.goto('https://forevermemories.fr', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Vérifier les boutons sans aria-label
    const buttonsWithoutLabel = await page.locator('button:not([aria-label])').count();
    const totalButtons = await page.locator('button').count();
    console.log(`✓ Boutons avec aria-label: ${totalButtons - buttonsWithoutLabel}/${totalButtons}`);
    if (buttonsWithoutLabel > 2) {
      findings.suggestions.push(`Ajouter aria-label à ${buttonsWithoutLabel} boutons pour l'accessibilité`);
    }

    // Vérifier les images alt text
    const imagesWithoutAlt = await page.locator('img:not([alt])').count();
    const totalImages = await page.locator('img').count();
    console.log(`✓ Images avec alt text: ${totalImages - imagesWithoutAlt}/${totalImages}`);
    if (imagesWithoutAlt > 0) {
      findings.important.push(`${imagesWithoutAlt} image(s) sans texte alternatif`);
    } else {
      findings.good.push('Toutes les images ont un texte alternatif');
    }

    // Test des liens
    console.log('\n🔗 Test des liens internes...');
    const links = await page.locator('a[href^="/"]').all();
    console.log(`✓ Liens internes à tester: ${links.length}`);

    let brokenLinks = 0;
    for (let i = 0; i < Math.min(links.length, 20); i++) {
      const href = await links[i].getAttribute('href');
      try {
        const response = await page.goto(`https://forevermemories.fr${href}`, { waitUntil: 'domcontentloaded', timeout: 5000 });
        if (response.status() !== 200) {
          brokenLinks++;
          findings.critical.push(`Lien cassé: ${href} (Status: ${response.status()})`);
        }
      } catch (error) {
        brokenLinks++;
        findings.critical.push(`Erreur de chargement: ${href}`);
      }
    }

    if (brokenLinks === 0) {
      findings.good.push('Tous les liens principaux fonctionnent correctement');
    }

    // Test formulaire contact
    console.log('\n📝 Test du formulaire de contact...');
    await page.goto('https://forevermemories.fr/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Vérifier les champs requis
    const requiredFields = await page.locator('input[required], textarea[required]').count();
    console.log(`✓ Champs obligatoires: ${requiredFields}`);

    // Test de validation
    const submitButton = page.locator('form button[type="submit"]');
    if (await submitButton.count() > 0) {
      await submitButton.first().click();
      await page.waitForTimeout(500);

      // Vérifier si des messages d'erreur apparaissent
      const errorMessages = await page.locator('[class*="error"], [role="alert"]').count();
      if (errorMessages > 0) {
        findings.good.push('Validation du formulaire fonctionne');
      } else {
        findings.suggestions.push('Ajouter des messages d\'erreur plus visibles pour la validation du formulaire');
      }
    }

    // Test responsive
    console.log('\n📱 Test responsive...');
    const viewports = [
      { name: 'iPhone SE', width: 375, height: 667 },
      { name: 'iPad', width: 768, height: 1024 },
      { name: 'Desktop', width: 1920, height: 1080 }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('https://forevermemories.fr', { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);

      // Vérifier le scroll horizontal
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      if (hasHorizontalScroll) {
        findings.important.push(`Scroll horizontal détecté sur ${viewport.name} (${viewport.width}x${viewport.height})`);
      } else {
        console.log(`✓ ${viewport.name}: Pas de scroll horizontal`);
      }
    }

    // Test performance vidéos
    console.log('\n🎬 Test des vidéos...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://forevermemories.fr', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const videoCount = await page.locator('video').count();
    console.log(`✓ Nombre total de vidéos: ${videoCount}`);

    if (videoCount > 15) {
      findings.suggestions.push(`Beaucoup de vidéos sur la page (${videoCount}). Considérer le lazy loading pour améliorer les performances`);
    }

    // Vérifier les vidéos en autoplay
    const autoplayVideos = await page.locator('video[autoplay]').count();
    console.log(`✓ Vidéos en autoplay: ${autoplayVideos}`);

    // Test SEO basique
    console.log('\n🔍 Test SEO basique...');
    await page.goto('https://forevermemories.fr');

    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    if (metaDescription && metaDescription.length > 50 && metaDescription.length < 160) {
      findings.good.push('Meta description optimale');
    } else if (metaDescription && metaDescription.length >= 160) {
      findings.suggestions.push(`Meta description trop longue (${metaDescription.length} caractères, recommandé: 50-160)`);
    }

    const h1Count = await page.locator('h1').count();
    if (h1Count === 1) {
      findings.good.push('Un seul H1 par page (bonne pratique SEO)');
    } else if (h1Count > 1) {
      findings.suggestions.push(`${h1Count} balises H1 trouvées, recommandé: 1 seule`);
    }

    // Test navigation clavier
    console.log('\n⌨️ Test navigation au clavier...');
    await page.goto('https://forevermemories.fr');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);

    const focusedElement = await page.evaluate(() => {
      const el = document.activeElement;
      return el ? el.tagName : null;
    });

    if (focusedElement) {
      findings.good.push('Navigation au clavier fonctionne');
    } else {
      findings.important.push('Problème de navigation au clavier détecté');
    }

    // Test des CTAs
    console.log('\n🎯 Analyse des CTAs...');
    await page.goto('https://forevermemories.fr');
    const ctaButtons = await page.locator('a:has-text("Réserver"), a:has-text("Contact"), a:has-text("Devis")').count();
    console.log(`✓ CTAs trouvés: ${ctaButtons}`);

    if (ctaButtons >= 3) {
      findings.good.push('Plusieurs CTAs clairs présents sur la page');
    }

    // Test des liens téléphone
    console.log('\n📞 Test des liens téléphone...');
    const phoneLinks = await page.locator('a[href^="tel:"]').count();
    console.log(`✓ Liens téléphone: ${phoneLinks}`);
    if (phoneLinks > 0) {
      findings.good.push('Liens téléphone cliquables présents');
    }

    // Test temps de chargement des pages clés
    console.log('\n⏱️ Test des temps de chargement...');
    const pages = [
      '/la-starcam',
      '/tarifs',
      '/mariages',
      '/contact'
    ];

    for (const pagePath of pages) {
      const startTime = Date.now();
      await page.goto(`https://forevermemories.fr${pagePath}`, { waitUntil: 'networkidle' });
      const loadTime = Date.now() - startTime;

      if (loadTime > 3000) {
        findings.suggestions.push(`Page ${pagePath} lente: ${loadTime}ms (>3s)`);
      } else {
        console.log(`✓ ${pagePath}: ${loadTime}ms`);
      }
    }

    // Test du menu mobile
    console.log('\n📱 Test détaillé du menu mobile...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://forevermemories.fr');
    await page.waitForTimeout(1000);

    // Ouvrir le menu
    await page.locator('button[aria-label="Toggle menu"]').click();
    await page.waitForTimeout(500);

    // Vérifier que tous les liens sont cliquables
    const mobileLinks = await page.locator('nav a').filter({ hasText: /.+/ }).count();
    console.log(`✓ Liens dans le menu mobile: ${mobileLinks}`);

    if (mobileLinks >= 8) {
      findings.good.push('Menu mobile complet avec tous les liens');
    }

  } catch (error) {
    console.error('❌ Erreur durant l\'audit:', error.message);
    findings.critical.push(`Erreur technique: ${error.message}`);
  } finally {
    await browser.close();
  }

  // Rapport final
  console.log('\n' + '='.repeat(70));
  console.log('📊 RAPPORT D\'AUDIT APPROFONDI');
  console.log('='.repeat(70));

  if (findings.critical.length > 0) {
    console.log('\n🚨 PROBLÈMES CRITIQUES (à corriger immédiatement):');
    findings.critical.forEach((item, i) => console.log(`  ${i + 1}. ${item}`));
  }

  if (findings.important.length > 0) {
    console.log('\n⚠️  PROBLÈMES IMPORTANTS (à corriger prochainement):');
    findings.important.forEach((item, i) => console.log(`  ${i + 1}. ${item}`));
  }

  if (findings.suggestions.length > 0) {
    console.log('\n💡 SUGGESTIONS D\'AMÉLIORATION:');
    findings.suggestions.forEach((item, i) => console.log(`  ${i + 1}. ${item}`));
  }

  if (findings.good.length > 0) {
    console.log('\n✅ POINTS POSITIFS:');
    findings.good.forEach((item, i) => console.log(`  ${i + 1}. ${item}`));
  }

  console.log('\n' + '='.repeat(70));

  // Score global
  const totalIssues = findings.critical.length + findings.important.length;
  const score = Math.max(0, 100 - (findings.critical.length * 15) - (findings.important.length * 5) - (findings.suggestions.length * 2));

  console.log(`\n📈 SCORE GLOBAL: ${score}/100`);
  if (score >= 90) {
    console.log('🎉 Excellent ! Le site est en très bon état.');
  } else if (score >= 70) {
    console.log('👍 Bon ! Quelques améliorations à prévoir.');
  } else {
    console.log('⚠️  Attention ! Plusieurs points à améliorer.');
  }
  console.log('='.repeat(70) + '\n');
}

auditApprofondi();
