import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';
import './brand.css';

export const metadata: Metadata = {
  title: '유다현 포트폴리오 | IT · AX',
  description: '업무의 흐름을 읽고, 더 나은 방식을 구현하는 개발자. 유다현의 풀스택 개발 프로젝트와 문제 해결 과정입니다.',
  metadataBase: new URL('https://wsgroup.dahyeon.kr'),
  openGraph: { title: '유다현 | IT · AX 개발 포트폴리오', description: '업무의 흐름을 읽고, 더 나은 방식을 구현하는 개발자', images: [{ url: '/assets/portfolio-share.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['/assets/portfolio-share.png'] },
  icons: { icon: '/assets/portfolio-icon.svg', shortcut: '/assets/portfolio-icon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
