export type NewsArticle = {
  title: string;
  description: string;
  content: string;
  url: string;
  source: string;
  date: string;
};

export async function fetchNews(lang: string): Promise<NewsArticle[]> {
  const API_KEY = process.env.NEWS_API_KEY;
  if (!API_KEY) throw new Error("NEWS_API_KEY not set");

  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?topic=health&lang=${lang}&max=10&token=${API_KEY}`,
    { cache: "no-store" } // 🔥 IMPORTANT
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  const data = await res.json();

  return data.articles.map((a: any) => ({
    title: a.title,
    description: a.description ?? "",
    content: a.content ?? "",
    url: a.url,
    source: a.source?.name ?? "Unknown",
    date: a.publishedAt ?? new Date().toISOString(),
  }));
}
