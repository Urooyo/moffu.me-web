import { Any, createClient } from '@sanity/client'

export const client = createClient({
  projectId: '1t7llc6i', // 너의 Sanity 프로젝트 ID
  dataset: 'production', // 너가 설정한 데이터셋 이름
  apiVersion: '2023-05-03', // 최신 날짜 사용
  useCdn: true, // true면 캐시된 데이터 사용 (읽기만 할 거면 true 추천)
});

export async function getAllSlugs(): Promise<string[]> {
  const query = `*[_type == "post" && defined(slug.current)][].slug.current`
  return await client.fetch(query)
}

export async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      body
    }`
  
    return await client.fetch(query)
  }

export async function getPostBySlug(slug: string): Promise<Any> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      body,
      publishedAt
    }`
    
    return await client.fetch(query, { slug })
  };