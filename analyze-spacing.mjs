import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Aller sur la page à propos
  await page.goto('http://localhost:3000/a-propos', { waitUntil: 'networkidle' });

  // Attendre un peu pour que tout soit chargé
  await page.waitForTimeout(2000);

  // Screenshot de toute la page
  await page.screenshot({
    path: 'page-a-propos-full.png',
    fullPage: true
  });

  console.log('✓ Screenshot full page sauvegardé: page-a-propos-full.png');

  // Screenshot de la zone Hero + Notre Histoire (le gap problématique)
  const heroSection = await page.locator('section').first();
  await heroSection.screenshot({
    path: 'hero-gap-section.png'
  });

  console.log('✓ Screenshot de la zone Hero sauvegardé: hero-gap-section.png');

  // Mesurer les dimensions et positions
  const sections = await page.locator('section').all();

  console.log('\n📏 Analyse des sections:');
  for (let i = 0; i < Math.min(sections.length, 5); i++) {
    const section = sections[i];
    const box = await section.boundingBox();
    const classes = await section.getAttribute('class');

    if (box) {
      console.log(`\nSection ${i + 1}:`);
      console.log(`  Classes: ${classes}`);
      console.log(`  Y: ${box.y}px`);
      console.log(`  Height: ${box.height}px`);
      console.log(`  Y-end: ${box.y + box.height}px`);

      if (i > 0) {
        const prevSection = sections[i - 1];
        const prevBox = await prevSection.boundingBox();
        if (prevBox) {
          const gap = box.y - (prevBox.y + prevBox.height);
          console.log(`  Gap avec section précédente: ${gap}px`);
        }
      }
    }
  }

  await browser.close();
})();
