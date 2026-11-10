# Dr. Felipe Poubel

Site profissional estático do Dr. Felipe Poubel, feito em [Astro](https://astro.build) e Tailwind. O domínio previsto é [drfelipepoubel.com.br](https://drfelipepoubel.com.br). A hospedagem alvo é o Cloudflare Pages, no plano gratuito.

Os textos de formação, os locais de atendimento e os telefones vieram do site antigo em Next.js. Onde o dado não está confirmado, a página mostra um marcador amarelo, como `[CRM-XX 00000]`.

## Requisitos

- Node.js 22 (o arquivo `.node-version` pede essa versão)
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

O comando sobe o site em `http://localhost:4321`.

Para gerar a versão que vai ao ar:

```bash
npm run build
npm run preview
```

`npm run build` grava o site em `dist`. `npm run preview` serve essa pasta.

## Escrever um post

1. Crie um arquivo `.md` ou `.mdx` em `src/content/blog/`. O nome do arquivo vira o endereço: `abcde-do-melanoma.md` fica em `/blog/abcde-do-melanoma`.
2. Preencha o frontmatter:

```yaml
---
title: Título do artigo
description: Resumo de uma ou duas frases, usado no Google e na lista do blog.
date: 2026-11-10
tags:
  - câncer de pele
audience: leigos
draft: true
---
```

- `audience` só aceita `leigos` ou `profissionais`.
- `tags` também são as categorias. Cada tag ganha uma página em `/blog/tag/nome-da-tag`.
- `draft: true` deixa o arquivo de fora da lista, da página do post, do RSS e do sitemap. O build falha se o rascunho de exemplo aparecer em `dist`.
- Para publicar, mude para `draft: false` e rode o build de novo.

Já existe um único post de exemplo, `src/content/blog/exemplo-rascunho-nao-publicar.mdx`, com `draft: true`. Ele não deve ir para o ar. Apague-o quando não precisar mais do modelo.

Filtros de público, sem JavaScript:

- `/blog`
- `/blog/publico/leigos`
- `/blog/publico/profissionais`

O feed fica em `/rss.xml`.

## Publicar no Cloudflare Pages

1. No painel do Cloudflare Pages, crie um projeto apontando para este repositório.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Versão do Node: 22 (o arquivo `.node-version` já indica isso).
5. Depois do primeiro deploy, associe o domínio `drfelipepoubel.com.br`.

Não é preciso comando de start. O Pages só publica os arquivos de `dist`.

O arquivo `public/_redirects` manda os endereços antigos para as páginas novas:

- `/servicos/cirurgia-geral` → `/areas/cirurgia-geral`
- `/servicos/cancer-de-pele` → `/areas/cancer-de-pele`
- `/servicos/cirurgias-ambulatoriais` → `/areas/cirurgia-dermatologica`

## Conformidade

O rodapé de todas as páginas traz o nome, o CRM/UF, o RQE e a frase de responsável técnico. Enquanto CRM, RQE e nome completo não forem confirmados, esses campos ficam como marcadores. Não publique número de registro no lugar do marcador sem conferir o cadastro no conselho.

O conteúdo evita promessa de resultado, depoimento de paciente e foto de antes e depois.

Os mapas incorporados do site antigo não batiam com os endereços escritos. A página de contato abre o Google Maps com o endereço que já estava no texto.
