// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// BASE_PATH lets the site live in a sub-folder (GitHub Pages: /frensh). Locally it stays at /.
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');

/** The pages write root-relative URLs ("/images/…", "/tableau"). After the build, prefix them with the base. */
function rebase() {
  return {
    name: 'rebase-root-urls',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (base === '/') return;
        const root = fileURLToPath(dir);
        const files = (await readdir(root, { recursive: true })).filter((f) => /\.(html|css|js)$/.test(f));
        const paths = /(["'(=\s])\/(?=(?:images|favicon\.|apple-touch|tableau|journee|propositions)\b)/g;
        for (const f of files) {
          const p = join(root, f);
          const src = await readFile(p, 'utf8');
          const out = src.replace(paths, `$1${base}`).replace(/href="\/"/g, `href="${base}"`);
          if (out !== src) await writeFile(p, out);
        }
      },
    },
  };
}

export default defineConfig({
  base,
  site: process.env.SITE_URL,
  integrations: [rebase()],
});
