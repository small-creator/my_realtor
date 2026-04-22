export interface PostItem {
  id: number;
  title: string;
  category: '부동산 뉴스' | '매수 팁' | '시장 분석' | '공지사항';
  summary: string;
  content: string;
  image?: string;
  createdAt: string;
}

export async function getAllPosts(): Promise<PostItem[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const res = await fetch(`${baseUrl}/api/posts`, {
      cache: 'no-store', // 최신 데이터 보장
    });
    const data = await res.json();
    return data.sort((a: PostItem, b: PostItem) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

export async function getPostById(id: number): Promise<PostItem | undefined> {
  const posts = await getAllPosts();
  return posts.find((p) => p.id === id);
}

export async function getRecentPosts(count: number = 3): Promise<PostItem[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}
