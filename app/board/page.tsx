'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts, type PostItem } from '@/lib/posts';

const categoryColors: Record<string, { bg: string; text: string }> = {
  '부동산 뉴스': { bg: 'bg-sky-100', text: 'text-sky-700' },
  '매수 팁': { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  '시장 분석': { bg: 'bg-violet-100', text: 'text-violet-700' },
  '공지사항': { bg: 'bg-amber-100', text: 'text-amber-700' },
};

const categories = ['전체', '부동산 뉴스', '매수 팁', '시장 분석', '공지사항'];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function CategoryBadge({ category }: { category: string }) {
  const colors = categoryColors[category] || { bg: 'bg-gray-100', text: 'text-gray-700' };
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
      {category}
    </span>
  );
}

function PostCard({ post, index }: { post: PostItem; index: number }) {
  return (
    <Link href={`/board/${post.id}`} className="block group">
      <div
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4">
            <CategoryBadge category={post.category} />
            <span className="text-xs text-gray-400">{formatDate(post.createdAt)}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed flex-1">
            {post.summary}
          </p>

          <div className="flex items-center text-primary text-sm font-semibold pt-4 border-t border-gray-50">
            자세히 보기
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BoardPage() {
  const [allPosts, setAllPosts] = useState<PostItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('전체');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const posts = await getAllPosts();
      setAllPosts(posts);
      setLoading(false);
    }
    loadPosts();
  }, []);

  const filteredPosts =
    activeCategory === '전체'
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-28 pb-20">
        <div className="container-custom">
          {/* Page Header */}
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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-400">불집필한 글을 불러오는 중...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-400 text-lg">해당 카테고리의 게시글이 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
