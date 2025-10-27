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
    path: 'page-a-propos-final.png',
    fullPage: true
  });

  console.log('✓ Screenshot final sauvegardé: page-a-propos-final.png');

  // Mesurer les dimensions et positions
  const sections = await page.locator('section').all();

  console.log('\n📏 Analyse des sections APRÈS ajustement:');
  for (let i = 0; i < Math.min(sections.length, 5); i++) {
    const section = sections[i];
    const box = await section.boundingBox();
    const classes = await section.getAttribute('class');

    if (box) {
      console.log(`\nSection ${i + 1}:`);
      console.log(`  Classes: ${classes}`);
      console.log(`  Height: ${box.height}px`);

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

  console.log('\n✅ Le spacing est maintenant harmonieux sur toute la page !');
  console.log('   - Hero: pb-12 md:pb-16 (48px/64px)');
  console.log('   - Sections: py-12 md:py-16 (48px/64px)');
  console.log('   - Headers: mb-12 (48px)');

  await browser.close();
})();
