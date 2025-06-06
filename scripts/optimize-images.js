// Script om alle afbeeldingen in de public-map te converteren naar WebP
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
const PUBLIC_DIR = path.resolve('./public');

function findImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findImages(filePath));
    } else {
      if (IMAGE_EXTENSIONS.includes(path.extname(file))) {
        results.push(filePath);
      }
    }
  });
  return results;
}

async function convertToWebP(filePath) {
  const newFilePath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  if (fs.existsSync(newFilePath)) return; // skip als webp al bestaat
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(newFilePath);
    console.log(`✔️  ${filePath} → ${newFilePath}`);
  } catch (err) {
    console.error(`❌  Fout bij converteren: ${filePath}`, err);
  }
}

async function main() {
  const images = findImages(PUBLIC_DIR);
  for (const img of images) {
    await convertToWebP(img);
  }
  console.log('Klaar! Alle afbeeldingen zijn geconverteerd naar WebP.');
}

main();
