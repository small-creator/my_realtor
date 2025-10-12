import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "지역전문가와 집찾기 | 마이중개사 - 서울 강동·미사 아파트 매수 전문",
  description: "팔지 않습니다. 찾아드립니다. 매물 접수 없이 100% 매수인 입장에서 도와드리는 아파트 매수 전문 중개서비스. 서울 강동구, 하남 미사 지역 전문.",
  keywords: "아파트 매수, 강동구 부동산, 미사 부동산, 매수대리, 바이어 에이전트",
  openGraph: {
    title: "마이중개사 - 아파트 매수 전문 중개서비스",
    description: "팔지 않습니다. 찾아드립니다. 지역 전문가와 집찾기",
    type: "website",
    locale: "ko_KR",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
