const report = require('./lighthouse-report.json');

console.log('=== SCORES ===');
console.log('Performance:', Math.round(report.categories.performance.score * 100));
console.log('Accessibility:', Math.round(report.categories.accessibility.score * 100));
console.log('Best Practices:', Math.round(report.categories['best-practices'].score * 100));
console.log('SEO:', Math.round(report.categories.seo.score * 100));

console.log('\n=== MÉTRIQUES PERFORMANCE ===');
const metrics = report.audits;
if (metrics['first-contentful-paint']) {
  console.log('FCP:', metrics['first-contentful-paint'].displayValue);
}
if (metrics['largest-contentful-paint']) {
  console.log('LCP:', metrics['largest-contentful-paint'].displayValue);
}
if (metrics['total-blocking-time']) {
  console.log('TBT:', metrics['total-blocking-time'].displayValue);
}
if (metrics['cumulative-layout-shift']) {
  console.log('CLS:', metrics['cumulative-layout-shift'].displayValue);
}
if (metrics['speed-index']) {
  console.log('Speed Index:', metrics['speed-index'].displayValue);
}

console.log('\n=== PROBLÈMES MAJEURS (Score < 90%) ===');
Object.entries(report.audits)
  .filter(([key, audit]) => audit.score !== null && audit.score < 0.9 && audit.scoreDisplayMode === 'binary')
  .forEach(([key, audit]) => {
    console.log(`\n❌ ${audit.title}`);
    if (audit.description) {
      console.log(`   ${audit.description.substring(0, 100)}...`);
    }
  });

console.log('\n=== OPPORTUNITÉS D\'AMÉLIORATION ===');
Object.entries(report.audits)
  .filter(([key, audit]) => audit.details && audit.details.type === 'opportunity' && audit.numericValue > 100)
  .sort((a, b) => b[1].numericValue - a[1].numericValue)
  .slice(0, 10)
  .forEach(([key, audit]) => {
    console.log(`\n🔧 ${audit.title}`);
    console.log(`   Économie potentielle: ${audit.displayValue || 'N/A'}`);
  });
