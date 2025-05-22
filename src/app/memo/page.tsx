export const dynamicParams = true;
export const dynamic = 'force-dynamic'

import { Any } from 'next-sanity';
import { PortableText } from 'next-sanity';
import { getPosts } from '@/lib/sanity.client'
import { Box, Container, Typography } from "@mui/material";

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <Container>
      <Container>
        <Typography variant='h2'>나의 작은 기록장</Typography>
        <Box>
          {posts.map((post: any, index: number) => (
            <Box key={`${post._id}-${index}`} mb={4}>
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1">
                <PortableText value={post.body} />
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {new Date(post.publishedAt).toLocaleDateString()}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  )}

  // <PortableText value={post.body} />
