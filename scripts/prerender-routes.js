// Runs after `npm run build` (the "postbuild" script).
//
// GitHub Pages only serves files that exist, so a direct visit to a client-side route such as
// /project/furuta-pendulum used to fall through to public/404.html and come back with HTTP 404.
// This copies build/index.html to every route declared in src/App.tsx, so each project link is a
// real page (HTTP 200) and React Router takes over from there. public/404.html stays as the
// fallback for anything else.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const buildDir = path.join(root, 'build');
const appSource = fs.readFileSync(path.join(root, 'src', 'App.tsx'), 'utf8');
const indexHtml = fs.readFileSync(path.join(buildDir, 'index.html'));

const routes = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((route) => route !== '/' && !route.includes(':') && !route.includes('*'));

if (routes.length === 0) {
  console.error('prerender-routes: no routes found in src/App.tsx');
  process.exit(1);
}

for (const route of routes) {
  const rel = route.replace(/^\/+|\/+$/g, '');
  // build/project/x.html is served at /project/x; build/project/x/index.html at /project/x/
  for (const file of [path.join(buildDir, `${rel}.html`), path.join(buildDir, rel, 'index.html')]) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, indexHtml);
  }
}

console.log(`prerender-routes: wrote pages for ${routes.length} routes`);
