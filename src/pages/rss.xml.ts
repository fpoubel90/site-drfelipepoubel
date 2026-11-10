import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts } from "../lib/blog";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: "Blog do Dr. Felipe Poubel",
    description:
      "Artigos informativos sobre cirurgia geral, cuidados com a pele e câncer de pele.",
    site: context.site ?? "https://drfelipepoubel.com.br",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}`,
      categories: [post.data.audience, ...post.data.tags],
    })),
    customData: "<language>pt-BR</language>",
    trailingSlash: false,
  });
}
