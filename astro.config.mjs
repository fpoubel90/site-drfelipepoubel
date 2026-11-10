import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DRAFT_SLUG = "exemplo-rascunho-nao-publicar";

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(full)));
    else files.push(full);
  }
  return files;
}

function draftGuard() {
  return {
    name: "draft-guard",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = await collectFiles(root);
        const leaks = [];
        for (const file of files) {
          if (!file.endsWith(".html") && !file.endsWith(".xml")) continue;
          const text = await readFile(file, "utf8");
          if (text.includes(DRAFT_SLUG) || text.includes("EXEMPLO DE RASCUNHO")) {
            leaks.push(path.relative(root, file));
          }
        }
        if (leaks.length > 0) {
          throw new Error(
            `Post com draft: true foi parar no build: ${leaks.join(", ")}`,
          );
        }
      },
    },
  };
}

export default defineConfig({
  site: "https://drfelipepoubel.com.br",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [mdx(), sitemap(), draftGuard()],
  vite: {
    plugins: [tailwindcss()],
  },
});
