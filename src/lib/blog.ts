import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export const audiences = [
  { id: "leigos", label: "Leigos" },
  { id: "profissionais", label: "Profissionais" },
] as const;

export type Audience = (typeof audiences)[number]["id"];

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog", ({ data }) => data.draft !== true);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function audienceLabel(audience: Audience): string {
  return audiences.find((item) => item.id === audience)?.label ?? audience;
}
