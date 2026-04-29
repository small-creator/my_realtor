import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BoardFilter from '@/components/BoardFilter';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: '부동산 뉴스 & 매수 팁 | 마이중개사',
  description: '강동구·미사 지역의 최신 부동산 소식과 아파트 매수에 도움이 되는 전문 콘텐츠를 확인하세요.',
  openGraph: {
    title: '부동산 뉴스 & 매수 팁 | 마이중개사',
    description: '강동구·미사 지역의 최신 부동산 소식과 아파트 매수에 도움이 되는 전문 콘텐츠',
  },
};

export default function BoardPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-28 pb-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              부동산 인사이트
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              뉴스 & 매수 팁
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              강동구·미사 지역의 최신 부동산 소식과 매수에 도움이 되는 전문 콘텐츠를 확인하세요.
            </p>
          </div>

          <BoardFilter posts={posts} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
