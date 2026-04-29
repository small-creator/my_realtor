import fs from 'fs';
import path from 'path';

export interface PostItem {
  id: number;
  title: string;
  category: '부동산 뉴스' | '매수 팁' | '시장 분석' | '공지사항';
  summary: string;
  content: string;
  image?: string;
  createdAt: string;
}

function readPostsFromFile(): PostItem[] {
  try {
    const filePath = path.join(process.cwd(), 'public/data/posts.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const posts: PostItem[] = JSON.parse(data);
    return posts.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch {
    return [];
  }
}

export function getAllPosts(): PostItem[] {
  return readPostsFromFile();
}

export function getPostById(id: number): PostItem | undefined {
  return readPostsFromFile().find((p) => p.id === id);
}

export function getRecentPosts(count: number = 3): PostItem[] {
  return readPostsFromFile().slice(0, count);
}
