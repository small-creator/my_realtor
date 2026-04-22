'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PostEditor from '@/components/admin/PostEditor';
import type { PostItem } from '@/lib/posts';

export default function EditPostPage() {
  const params = useParams();
  const id = Number(params?.id);
  const [post, setPost] = useState<PostItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch('/api/posts');
        const posts: PostItem[] = await res.json();
        const found = posts.find(p => p.id === id);
        if (found) setPost(found);
      } catch (error) {
        console.error('Failed to fetch post');
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!post) return <div className="min-h-screen flex items-center justify-center">Post not found</div>;

  return <PostEditor initialData={post} isEdit={true} />;
}
