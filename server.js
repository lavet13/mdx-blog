import fs from 'node:fs/promises';
import express from 'express';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5173;
const BASE = process.env.BASE || '/';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resolve = p => path.resolve(__dirname, p);

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile(resolve('dist/client/index.html'), 'utf-8')
  : '';
const ssrManifest = isProduction
  ? await fs.readFile(resolve('dist/client/.vite/ssr-manifest.json'), 'utf-8')
  : undefined;

const getStyleSheets = async () => {
  try {
    const assetPath = resolve('public');
    const files = await fs.readdir(assetPath);
    const cssAssets = files.filter(l => l.endsWith('.css'));
    const allContent = [];
    for (const asset of cssAssets) {
      const content = await fs.readFile(path.join(assetPath, asset), 'utf-8');
      allContent.push(`<style type="text/css">${content}</style>`);
    }

    return allContent.join('\n');
  } catch {
    return '';
  }
};

// Create http server
const app = express();

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort
) {
  // Add Vite or respective production middlewares
  let vite = null;
  if (!isProd) {
    const { createServer } = await import('vite');
    vite = await createServer({
      root,
      logLevel: 'info',
      server: { middlewareMode: true, hmr: { PORT: hmrPort } },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import('compression')).default;
    const sirv = (await import('sirv')).default;
    app.use(compression());
    app.use(BASE, sirv('./dist/client', { extensions: [], gzip: true }));
  }

  const stylesheets = getStyleSheets();

  // Serve HTML
  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProduction) {
        // Always read fresh template in development
        template = await fs.readFile(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template); // Inserting react-refresh for local development
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = templateHtml;
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const appHtml = render(url, ssrManifest);
      const cssAssets = await stylesheets;

      const html = template
        .replace(`<!--app-head-->`, cssAssets ?? '')
        .replace(`<!--app-html-->`, appHtml ?? '');

      res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
    } catch (e) {
      vite?.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
      next(e);
    }
  });

  return { app, vite };
}

createServer().then(({ app, vite }) => app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started at http://localhost:${PORT}`);
}))
