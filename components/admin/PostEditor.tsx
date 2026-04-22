'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { PostItem } from '@/lib/posts';

interface PostEditorProps {
  initialData?: PostItem;
  isEdit?: boolean;
}

export default function PostEditor({ initialData, isEdit }: PostEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    category: initialData?.category || '부동산 뉴스',
    summary: initialData?.summary || '',
    content: initialData?.content || '',
    createdAt: initialData?.createdAt || new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    const savedPassword = sessionStorage.getItem('admin_password');
    if (!savedPassword) {
      router.push('/admin');
    } else {
      setPassword(savedPassword);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. 최신 글 목록 가져오기
      const res = await fetch('/api/posts');
      const posts: PostItem[] = await res.json();

      let updatedPosts: PostItem[];
      
      if (isEdit && initialData) {
        // 수정 모드
        updatedPosts = posts.map(p => 
          p.id === initialData.id ? { ...p, ...formData } : p
        );
      } else {
        // 신규 모드
        const nextId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
        const newPost: PostItem = {
          id: nextId,
          ...formData as any
        };
        updatedPosts = [newPost, ...posts];
      }

      // 2. GitHub API를 통해 저장
      const saveRes = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, posts: updatedPosts }),
      });

      if (saveRes.ok) {
        alert('저장되었습니다! 반영까지 약 1~2분이 소요됩니다.');
        router.push('/admin');
      } else {
        const err = await saveRes.json();
        alert('저장 실패: ' + err.error);
      }
    } catch (error) {
      alert('오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-28 pb-20 container-custom max-w-4xl">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-primary mb-4 flex items-center gap-1"
          >
            ← 뒤로가기
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEdit ? '게시글 수정' : '새 게시글 작성'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">제목</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                placeholder="게시글 제목을 입력하세요"
              />
            </div>

            {/* Category & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">카테고리</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="부동산 뉴스">부동산 뉴스</option>
                  <option value="매수 팁">매수 팁</option>
                  <option value="시장 분석">시장 분석</option>
                  <option value="공지사항">공지사항</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">작성일</label>
                <input
                  type="date"
                  required
                  value={formData.createdAt}
                  onChange={(e) => setFormData({ ...formData, createdAt: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">요약 (목록 노출)</label>
              <textarea
                required
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                rows={2}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none resize-none"
                placeholder="목록 화면에 노출될 짧은 요약을 입력하세요"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">본문 (Markdown 지원)</label>
              <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={15}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none font-mono"
                placeholder="## 본문을 작성하세요&#10;- 리스트 항목&#10;**굵은 글씨**"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 bg-white border border-gray-200 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 shadow-lg transition-all"
            >
              {loading ? '저장 중...' : (isEdit ? '수정 내용 저장' : '게시글 등록')}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}
