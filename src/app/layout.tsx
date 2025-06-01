import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppBarUI from "@/component/AppBarUI";
import EmotionCacheProvider from '@/component/EmotionCacheProvider'
import { Box } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moffu",
  description: "보랏빛 고양이의 서랍!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <EmotionCacheProvider>
          <AppBarUI></AppBarUI>
          <Box sx={{ marginTop: 8, marginLeft: 2, marginRight: 2, padding: 0}}>
            {children}
          </Box>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
