import sharp from 'sharp';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicons() {
  const logoPath = join(__dirname, 'public', 'Black.png');
  const appDir = join(__dirname, 'app');
  const publicDir = join(__dirname, 'public');

  console.log('📸 Génération des favicons...\n');

  try {
    // Lire le logo
    const logo = sharp(logoPath);
    const metadata = await logo.metadata();
    console.log(`Logo source: ${metadata.width}x${metadata.height}`);

    // Créer un logo carré avec padding et fond blanc pour le favicon
    const faviconSize = 512;
    const logoWidth = Math.floor(faviconSize * 0.8); // Logo prend 80% de l'espace

    const resizedLogo = await logo
      .resize(logoWidth, null, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toBuffer();

    // 1. Créer icon.png pour app (512x512 avec fond blanc)
    console.log('✓ Création de app/icon.png (512x512)');
    await sharp({
      create: {
        width: faviconSize,
        height: faviconSize,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([{
      input: resizedLogo,
      gravity: 'center'
    }])
    .png()
    .toFile(join(appDir, 'icon.png'));

    // 2. Créer apple-icon.png (180x180)
    console.log('✓ Création de app/apple-icon.png (180x180)');
    const appleSize = 180;
    const appleLogoWidth = Math.floor(appleSize * 0.8);

    const appleResizedLogo = await sharp(logoPath)
      .resize(appleLogoWidth, null, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toBuffer();

    await sharp({
      create: {
        width: appleSize,
        height: appleSize,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([{
      input: appleResizedLogo,
      gravity: 'center'
    }])
    .png()
    .toFile(join(appDir, 'apple-icon.png'));

    // 3. Créer favicon.ico (multi-tailles: 16, 32, 48)
    console.log('✓ Création de public/favicon.ico (16x16, 32x32, 48x48)');

    // Pour favicon.ico, on crée un PNG 32x32 (le navigateur le gère)
    const faviconIcoSize = 32;
    const faviconIcoLogoWidth = Math.floor(faviconIcoSize * 0.8);

    const faviconIcoResizedLogo = await sharp(logoPath)
      .resize(faviconIcoLogoWidth, null, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toBuffer();

    await sharp({
      create: {
        width: faviconIcoSize,
        height: faviconIcoSize,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([{
      input: faviconIcoResizedLogo,
      gravity: 'center'
    }])
    .png()
    .toFile(join(publicDir, 'favicon.ico'));

    // 4. Créer aussi un favicon-16x16.png et favicon-32x32.png
    console.log('✓ Création de public/favicon-16x16.png');
    const favicon16LogoWidth = Math.floor(16 * 0.8);
    const favicon16ResizedLogo = await sharp(logoPath)
      .resize(favicon16LogoWidth, null, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toBuffer();

    await sharp({
      create: {
        width: 16,
        height: 16,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([{
      input: favicon16ResizedLogo,
      gravity: 'center'
    }])
    .png()
    .toFile(join(publicDir, 'favicon-16x16.png'));

    console.log('✓ Création de public/favicon-32x32.png');
    const favicon32LogoWidth = Math.floor(32 * 0.8);
    const favicon32ResizedLogo = await sharp(logoPath)
      .resize(favicon32LogoWidth, null, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toBuffer();

    await sharp({
      create: {
        width: 32,
        height: 32,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([{
      input: favicon32ResizedLogo,
      gravity: 'center'
    }])
    .png()
    .toFile(join(publicDir, 'favicon-32x32.png'));

    console.log('\n✅ Tous les favicons ont été générés avec succès !');
    console.log('\nFichiers créés:');
    console.log('  - app/icon.png (512x512)');
    console.log('  - app/apple-icon.png (180x180)');
    console.log('  - public/favicon.ico (32x32)');
    console.log('  - public/favicon-16x16.png');
    console.log('  - public/favicon-32x32.png');

  } catch (error) {
    console.error('❌ Erreur lors de la génération des favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
