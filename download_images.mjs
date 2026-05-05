import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';

const PUBLIC_DIR = path.join(process.cwd(), 'public', 'images');
const SRC_DIR = path.join(process.cwd(), 'src');

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      walk(path.join(dir, file), fileList);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

async function main() {
  const files = walk(SRC_DIR);
  // Match URLs inside quotes (single, double, or backticks)
  const regex = /"https:\/\/[a-zA-Z0-9.\-_]+\/(?:[a-zA-Z0-9.\-_~:/?#\[\]@!$&'()*+,;=]+)"|'https:\/\/[a-zA-Z0-9.\-_]+\/(?:[a-zA-Z0-9.\-_~:/?#\[\]@!$&'()*+,;=]+)'|`https:\/\/[a-zA-Z0-9.\-_]+\/(?:[a-zA-Z0-9.\-_~:/?#\[\]@!$&'()*+,;=]+)`/g;

  let totalDownloaded = 0;
  const urlMap = new Map();

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    let match;

    const urlsToReplace = [];
    while ((match = regex.exec(content)) !== null) {
      const fullMatch = match[0];
      const url = fullMatch.slice(1, -1); // Remove quotes

      // Only target image URLs
      if (
        url.includes('unsplash.com') ||
        url.includes('pexels.com') ||
        url.includes('cdn.sanity.io') ||
        url.includes('beantowntraveller.com') ||
        url.endsWith('.jpg') ||
        url.endsWith('.png') ||
        url.endsWith('.jpeg') ||
        url.endsWith('.webp')
      ) {
        urlsToReplace.push({ fullMatch, url });
      }
    }

    if (urlsToReplace.length > 0) {
      for (const { fullMatch, url } of urlsToReplace) {
        if (!urlMap.has(url)) {
          const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 10);
          let ext = '.jpg'; // default
          if (url.includes('.png')) ext = '.png';
          else if (url.includes('.webp')) ext = '.webp';
          
          const filename = `img_${hash}${ext}`;
          const filepath = path.join(PUBLIC_DIR, filename);
          const localUrl = `/images/${filename}`;

          if (!fs.existsSync(filepath)) {
            console.log(`Downloading: ${url}`);
            try {
              await downloadImage(url, filepath);
              console.log(`Saved: ${filename}`);
            } catch (err) {
              console.error(`Error downloading ${url}:`, err.message);
              continue; // Skip replacement if download fails
            }
          }
          urlMap.set(url, localUrl);
        }

        const localUrl = urlMap.get(url);
        const quoteType = fullMatch[0];
        const newMatch = `${quoteType}${localUrl}${quoteType}`;
        content = content.replace(fullMatch, newMatch);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${path.basename(file)}`);
    }
  }

  console.log(`All done! Replaced ${urlMap.size} unique images.`);
}

main().catch(console.error);
