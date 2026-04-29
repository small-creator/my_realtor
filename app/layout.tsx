import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "지역전문가와 집찾기 | 마이중개사 - 서울 강동·미사 아파트 매수 전문",
  description: "팔지 않습니다. 찾아드립니다. 매물 접수 없이 100% 매수인 입장에서 도와드리는 아파트 매수 전문 중개서비스. 서울 강동구, 하남 미사 지역 전문.",
  keywords: "아파트 매수, 강동구 부동산, 미사 부동산, 매수대리, 바이어 에이전트, 부동산 중개, 아파트 구매, 강동구 아파트, 미사 아파트, 하남 부동산",
  verification: {
    google: 'DLgZhh6tw9ORfVH0KGjGeoDEfVOfmg-OtJu6L6zXDy4',
    other: {
      'naver-site-verification': 'NAVER_VERIFICATION_CODE_HERE',
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "마이중개사 - 아파트 매수 전문 중개서비스",
    description: "팔지 않습니다. 찾아드립니다. 지역 전문가와 집찾기",
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "마이중개사",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider>
          {children}
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
