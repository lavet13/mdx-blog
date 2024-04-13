// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { PAGES } from './src/pages/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toAbsolute = p => path.resolve(__dirname, p);

const template = await fs.readFile(toAbsolute('dist/static/index.html'), 'utf-8');
const render = (await import('./dist/server/entry-server.js')).render;

// determine routes to pre-render from src/pages
// const routesToPrerender = await fs.readdir(toAbsolute('src/pages')).map(file => {
//   const name = file.replace(/\.tsx$/, '').toLowerCase();
//   return name === 'home' ? `/` : `/${name}`;
// });

const routesToPrerender = Object.values(PAGES).map(page => {
  return page.path;
}).filter(path => {
  if(/:+/.test(path)) {
    return false;
  }
  return true;
});

// pre-render each route...
for (const path of routesToPrerender) {
  const appHtml = render(path);

  const html = template.replace(`<!--app-html-->`, appHtml);

  const filePath = `dist/static${path === '/' ? '/index' : path}.html`;
  await fs.writeFile(toAbsolute(filePath), html);
  console.log('[SSG](pre-rendered):', filePath);
}
