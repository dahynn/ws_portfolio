import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';
import './brand.css';

export const metadata: Metadata = {
  title: '유다현 포트폴리오 | IT · AX',
  description: '업무의 흐름을 읽고, 더 나은 방식을 구현하는 개발자. 유다현의 개발 프로젝트와 시스템 안정성·데이터·AI 활용을 위한 문제 해결 과정입니다.',
  metadataBase: new URL('https://wsgroup.dahyeon.kr'),
  openGraph: { title: '유다현 | IT · AX 개발 포트폴리오', description: '업무의 흐름을 읽고, 더 나은 방식을 구현하는 개발자', images: [{ url: '/assets/portfolio-share.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['/assets/portfolio-share.png'] },
  icons: {
    icon: [
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/assets/favicon-32.png',
    apple: { url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
