'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostById, getAllPosts } from '@/lib/posts';

const categoryColors: Record<string, { bg: string; text: string }> = {
  '부동산 뉴스': { bg: 'bg-sky-100', text: 'text-sky-700' },
  '매수 팁': { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  '시장 분석': { bg: 'bg-violet-100', text: 'text-violet-700' },
  '공지사항': { bg: 'bg-amber-100', text: 'text-amber-700' },
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderMarkdown(content: string) {
  let html = content;

  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3">$1</h3>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-primary bg-primary/5 px-5 py-4 my-6 rounded-r-lg text-gray-700 italic">$1</blockquote>');
  html = html.replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1.5 text-xs">●</span><span>$1</span></li>');
  html = html.replace(/(<li.*<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>');

  html = html.replace(/^\|(.+)\|$/gm, (match) => {
    const cells = match.split('|').filter(Boolean).map((c) => c.trim());
    if (cells.every((c) => /^[-:]+$/.test(c))) return '';
    const isHeader = match.includes('---');
    if (isHeader) return '';
    return `<tr>${cells.map((c) => `<td class="px-4 py-3 border-b border-gray-100 text-sm">${c}</td>`).join('')}</tr>`;
  });
  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, '<div class="overflow-x-auto my-6"><table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"><tbody>$&</tbody></table></div>');

  html = html.replace(/^\d+\. (.+)$/gm, '<li class="flex items-start gap-3 mb-3"><span class="bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"></span><span>$1</span></li>');

  const paragraphs = html.split('\n\n');
  html = paragraphs
    .map((p) => {
      const trimmed = p.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<')) return trimmed;
      return `<p class="text-gray-600 leading-relaxed mb-4">${trimmed}</p>`;
    })
    .join('\n');

  return html;
}

export default function BoardDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);
  const [post, setPost] = useState<PostItem | null>(null);
  const [allPosts, setAllPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const all = await getAllPosts();
      setAllPosts(all);
      const found = all.find(p => p.id === id);
      setPost(found || null);
      setLoading(false);
    }
    loadPost();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 text-center flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p className="text-gray-400">데이터를 불러오는 중...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <div className="text-6xl mb-6">😔</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">게시글을 찾을 수 없습니다</h2>
          <Link href="/board" className="text-primary hover:underline font-medium">
            ← 목록으로 돌아가기
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const colors = categoryColors[post.category] || { bg: 'bg-gray-100', text: 'text-gray-700' };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/board"
              className="inline-flex items-center text-gray-400 hover:text-primary transition-colors duration-300 text-sm font-medium group"
            >
              <svg className="w-4 h-4 mr-1.5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              목록으로 돌아가기
            </Link>
          </div>

          {/* Article Card */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Article Header */}
            <div className="p-8 md:p-12 border-b border-gray-100">
              <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-6 ${colors.bg} ${colors.text}`}>
                {post.category}
              </span>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(post.createdAt)}
                </div>
                <span className="text-gray-200">|</span>
                <span>마이중개사</span>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="p-8 md:p-12 prose-custom"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />

            {/* CTA Banner */}
            <div className="mx-8 md:mx-12 mb-8 md:mb-12 bg-gradient-to-r from-primary to-sky-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-xl font-bold mb-2">전문 상담이 필요하신가요?</h3>
              <p className="text-white/80 mb-6 text-sm">매수 전문 중개사가 1:1로 도와드립니다. 무료 상담을 신청하세요.</p>
              <a
                href="https://tr.ee/ezLrPu6yQI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                무료 상담 신청
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* Prev / Next Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {prevPost ? (
              <Link
                href={`/board/${prevPost.id}`}
                className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <span className="text-xs text-gray-400 mb-1 block">이전 글</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors line-clamp-1">
                  ← {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/board/${nextPost.id}`}
                className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-right"
              >
                <span className="text-xs text-gray-400 mb-1 block">다음 글</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors line-clamp-1">
                  {nextPost.title} →
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
