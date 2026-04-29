'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type PostItem } from '@/lib/posts';

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

export default function BoardFilter({ posts }: { posts: PostItem[] }) {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredPosts =
    activeCategory === '전체'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
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

      {filteredPosts.length === 0 ? (
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
    </>
  );
}
