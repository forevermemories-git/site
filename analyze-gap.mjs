import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/a-propos', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Capturer uniquement la zone Hero + Notre Histoire
  const heroSection = page.locator('section').first();
  const notreHistoireSection = page.locator('section').nth(1);

  const heroBox = await heroSection.boundingBox();
  const histoireBox = await notreHistoireSection.boundingBox();

  console.log('📊 Analyse détaillée du gap problématique:\n');

  if (heroBox && histoireBox) {
    console.log('Hero Section:');
    console.log(`  Y-start: ${heroBox.y}px`);
    console.log(`  Height: ${heroBox.height}px`);
    console.log(`  Y-end: ${heroBox.y + heroBox.height}px\n`);

    console.log('Notre Histoire Section:');
    console.log(`  Y-start: ${histoireBox.y}px`);
    console.log(`  Height: ${histoireBox.height}px\n`);

    const actualGap = histoireBox.y - (heroBox.y + heroBox.height);
    console.log(`🔴 GAP TOTAL: ${actualGap}px\n`);

    // Capturer l'image du gap
    await page.screenshot({
      path: 'gap-zone.png',
      clip: {
        x: 0,
        y: heroBox.y + heroBox.height - 100,
        width: 1280,
        height: 400
      }
    });

    console.log('✓ Screenshot du gap sauvegardé: gap-zone.png');

    // Analyser le contenu du Hero
    const heroText = await heroSection.textContent();
    console.log('\n📝 Contenu Hero:', heroText?.substring(0, 100) + '...');

    const histoireText = await notreHistoireSection.textContent();
    console.log('📝 Contenu Notre Histoire:', histoireText?.substring(0, 100) + '...');
  }

  // Vérifier les classes CSS appliquées
  const heroClasses = await heroSection.getAttribute('class');
  const histoireClasses = await notreHistoireSection.getAttribute('class');

  console.log('\n🎨 Classes CSS:');
  console.log(`Hero: ${heroClasses}`);
  console.log(`Notre Histoire: ${histoireClasses}`);

  await browser.close();
})();
