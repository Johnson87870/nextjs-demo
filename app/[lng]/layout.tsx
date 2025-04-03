import { dir } from 'i18next'
import { languages } from '@/app/i18n/settings'
import { ReactNode } from 'react';
import { AppProps } from 'next/app';
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}
interface LayoutProps extends AppProps {
  children: ReactNode;
  params: { lng: string };  // 传入 params.lng 参数，确保正确传递语言信息
}
export default function RootLayout({
  children,
  params: {
    lng
  }
}:LayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}