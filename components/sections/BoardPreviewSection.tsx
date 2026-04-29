import Link from 'next/link';
import { getRecentPosts, type PostItem } from '@/lib/posts';

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

export default function BoardPreviewSection() {
  const recentPosts = getRecentPosts(3);

  return (
    <section className="section-spacing bg-white" id="board">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            부동산 인사이트
          </div>
          <h2 className="heading-2 text-gray-900">
            뉴스 & 매수 팁
          </h2>
          <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
            강동구·미사 지역의 최신 소식과 매수에 도움이 되는 전문 콘텐츠
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {recentPosts.map((post) => {
            const colors = categoryColors[post.category] || { bg: 'bg-gray-100', text: 'text-gray-700' };
            return (
              <Link
                key={post.id}
                href={`/board/${post.id}`}
                className="block group"
              >
                <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-1.5 bg-gradient-to-r from-primary via-sky-400 to-primary-light" />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{formatDate(post.createdAt)}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed flex-1">
                      {post.summary}
                    </p>

                    <div className="flex items-center text-primary text-sm font-semibold pt-4 border-t border-gray-200/60">
                      자세히 보기
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/board"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-soft hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
          >
            모든 게시글 보기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
