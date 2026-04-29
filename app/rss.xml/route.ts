import { getAllPosts } from '@/lib/posts';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://my-realtor-swart.vercel.app';
  const posts = getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>마이중개사 - 부동산 인사이트</title>
  <link>${baseUrl}</link>
  <description>강동구·미사 지역의 최신 부동산 소식과 아파트 매수 팁</description>
  <language>ko-KR</language>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
  ${posts
    .map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/board/${post.id}</link>
      <guid>${baseUrl}/board/${post.id}</guid>
      <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
    </item>`).join('')}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
