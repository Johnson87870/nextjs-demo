import Link from 'next/link'
import { useTranslation } from '@/app/i18n/index'

export default async function Page({ params }: { params: { lng: string } }) {
  const { lng } = params; // 确保 params 已经解析
  const { t } = await useTranslation(lng, 'second-page');
  return (
    <>
      <h1>Hi from {t('title')}!</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  );
}