'use client'

import { PortableText } from 'next-sanity';
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

export default function BlogClient({ posts }: { posts: any[] }) {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Typography variant='h2'>작은 기록장</Typography>
        <Box>
          {posts.map((post, index) => (
            <Box key={`${post._id}-${index}`} mb={4}>
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
              <PortableText
                value={post.body}
                components={{
                  block: {
                    h2: ({ children }) => (
                      <Typography variant='h5' marginTop={2} component={'h2'} gutterBottom>
                        {children}
                      </Typography>
                    ),
                    h3: ({ children }) => (
                      <Typography variant='h6' marginTop={1} component={'h3'} gutterBottom>
                        {children}
                      </Typography>
                    ),
                    normal: ({ children }) => (
                      <Typography variant='body1' component={'p'} gutterBottom>
                        {children}
                      </Typography>
                    ),
                    ul: ({ children }) => (
                      <Typography variant='body1' component={'ul'} gutterBottom>
                        {children}
                      </Typography>
                    ),
                    li: ({ children }) => (
                      <Typography variant='body1' component={'li'} gutterBottom>
                        {children}
                      </Typography>
                    ),
                  }
                }}
              />
              <Typography variant="caption" color="textSecondary">
                {new Date(post.publishedAt).toLocaleDateString()}
              </Typography>
            </Box>
          ))}
        </Box>
      </ThemeProvider>
    </Container>
  );
}