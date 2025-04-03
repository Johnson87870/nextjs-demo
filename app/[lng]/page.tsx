
import { useTranslation } from '@/app/i18n/index'
import Link from 'next/link'
export default async function Home({params: {lng}} :{ params: { lng: string}}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'translation')
  return (
  //  <h1>{t('welcome')}</h1>
  <div>
    hi here <h1>{t('welcome')}</h1>
    <Link href={`/${lng}/second-page`}>{lng} about</Link>
  </div>
  );
}
