'use client'

import { CacheProvider } from '@emotion/react'
import createEmotionCache from '@/theme/createEmotionCache'
import { ReactNode } from 'react'

const clientSideEmotionCache = createEmotionCache()

export default function EmotionCacheProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      {children}
    </CacheProvider>
  )
}