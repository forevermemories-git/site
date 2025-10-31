import { chromium } from '@playwright/test';

async function auditSite() {
  console.log('🔍 Démarrage de l\'audit du site ForeverMemories...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const issues = [];
  const recommendations = [];

  try {
    // Page d'accueil
    console.log('📄 Test de la page d\'accueil...');
    await page.goto('https://forevermemories.fr', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Vérifier le titre
    const title = await page.title();
    console.log(`✓ Titre: ${title}`);

    // Vérifier les vidéos
    const videos = await page.locator('video').count();
    console.log(`✓ Nombre de vidéos: ${videos}`);

    // Vérifier les liens du header
    const navLinks = await page.locator('header a').count();
    console.log(`✓ Liens dans le header: ${navLinks}`);

    // Test du menu mobile
    console.log('\n📱 Test du menu mobile...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);

    const hamburgerButton = page.locator('button[aria-label="Toggle menu"]');
    if (await hamburgerButton.isVisible()) {
      await hamburgerButton.click();
      await page.waitForTimeout(500);
      console.log('✓ Menu hamburger ouvert');

      // Vérifier que le menu est visible
      const mobileMenu = page.locator('nav').last();
      if (await mobileMenu.isVisible()) {
        console.log('✓ Menu mobile visible');
      } else {
        issues.push('❌ Menu mobile non visible après ouverture');
      }

      // Fermer le menu
      const closeButton = page.locator('button[aria-label="Fermer le menu"]');
      await closeButton.click();
      await page.waitForTimeout(500);
      console.log('✓ Menu mobile fermé');
    }

    // Retour en desktop
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Test page La Starcam
    console.log('\n📄 Test de la page La Starcam...');
    await page.goto('https://forevermemories.fr/la-starcam', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    console.log(`✓ Page chargée: ${await page.title()}`);

    // Vérifier le CTA bandeau violet
    const ctaButtons = await page.locator('section.bg-gradient-primary a').count();
    console.log(`✓ Boutons CTA dans bandeau: ${ctaButtons}`);

    // Test page Tarifs
    console.log('\n📄 Test de la page Tarifs...');
    await page.goto('https://forevermemories.fr/tarifs', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    console.log(`✓ Page chargée: ${await page.title()}`);

    // Test page Contact
    console.log('\n📄 Test de la page Contact...');
    await page.goto('https://forevermemories.fr/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    console.log(`✓ Page chargée: ${await page.title()}`);

    // Vérifier le formulaire
    const formInputs = await page.locator('form input, form textarea').count();
    console.log(`✓ Champs de formulaire: ${formInputs}`);

    // Test page Mariages
    console.log('\n📄 Test de la page Mariages...');
    await page.goto('https://forevermemories.fr/mariages', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    console.log(`✓ Page chargée: ${await page.title()}`);

    // Test des liens CTA
    console.log('\n🔗 Vérification des liens CTA...');
    const ctaLink = page.locator('a[href="/contact"]').first();
    if (await ctaLink.isVisible()) {
      console.log('✓ Lien vers /contact trouvé et visible');
    } else {
      issues.push('❌ Lien vers /contact non trouvé');
    }

    // Vérifier les images
    console.log('\n🖼️ Vérification des images...');
    await page.goto('https://forevermemories.fr', { waitUntil: 'networkidle' });
    const images = await page.locator('img').all();
    let brokenImages = 0;
    for (const img of images) {
      const naturalWidth = await img.evaluate((el) => el.naturalWidth);
      if (naturalWidth === 0) {
        brokenImages++;
      }
    }
    if (brokenImages > 0) {
      issues.push(`❌ ${brokenImages} image(s) non chargée(s)`);
    } else {
      console.log('✓ Toutes les images chargées correctement');
    }

    // Test de scroll sur mobile
    console.log('\n📱 Test du scroll mobile avec menu...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://forevermemories.fr', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Scroll vers le bas
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    // Ouvrir le menu
    await page.locator('button[aria-label="Toggle menu"]').click();
    await page.waitForTimeout(500);

    // Vérifier que le body n'est pas scrollable
    const bodyOverflow = await page.evaluate(() => {
      return window.getComputedStyle(document.body).overflow;
    });
    if (bodyOverflow === 'hidden') {
      console.log('✓ Scroll de la page bloqué quand menu ouvert');
    } else {
      issues.push('⚠️ Le scroll de la page n\'est pas bloqué quand le menu est ouvert');
    }

    // Test du favicon
    console.log('\n🎨 Vérification du favicon...');
    await page.goto('https://forevermemories.fr');
    const faviconLink = await page.locator('link[rel="icon"]').first();
    if (await faviconLink.count() > 0) {
      console.log('✓ Favicon configuré');
    } else {
      issues.push('❌ Favicon non trouvé');
    }

    // Recommandations
    console.log('\n💡 Analyse des recommandations...');

    // Vérifier la performance
    const performance = await page.evaluate(() => {
      const timing = performance.timing;
      return {
        loadTime: timing.loadEventEnd - timing.navigationStart,
        domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart
      };
    });

    if (performance.loadTime > 3000) {
      recommendations.push(`⚠️ Temps de chargement élevé: ${performance.loadTime}ms (recommandé: <3000ms)`);
    } else {
      console.log(`✓ Temps de chargement OK: ${performance.loadTime}ms`);
    }

  } catch (error) {
    console.error('❌ Erreur durant l\'audit:', error.message);
    issues.push(`❌ Erreur: ${error.message}`);
  } finally {
    await browser.close();
  }

  // Rapport final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RAPPORT D\'AUDIT FINAL');
  console.log('='.repeat(60));

  if (issues.length === 0) {
    console.log('\n✅ Aucun problème critique détecté !');
  } else {
    console.log('\n⚠️ PROBLÈMES DÉTECTÉS:');
    issues.forEach(issue => console.log(`  ${issue}`));
  }

  if (recommendations.length > 0) {
    console.log('\n💡 RECOMMANDATIONS:');
    recommendations.forEach(rec => console.log(`  ${rec}`));
  }

  console.log('\n' + '='.repeat(60));
}

auditSite();
