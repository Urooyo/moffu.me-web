// src/app/memo/page.tsx (Server Component)

import { getPosts } from '@/lib/sanity.client';
import BlogClient from '@/app/memo/BlogClient';

export default async function BlogPage() {
  const posts = await getPosts();
  
  return <BlogClient posts={posts} />;
}