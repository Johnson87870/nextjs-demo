import { createInstance, i18n } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

type UseTranslationOptions = {
  keyPrefix?: string
}

// Define the type for the 't' function: a function that accepts key and options, and returns a string
type TFunction = (key: string, options?: Record<string, unknown>) => string

const initI18next = async (lng: string, ns: string | string[]): Promise<i18n> => {
  // If ns is an array, take the first element
  const normalizedNs = Array.isArray(ns) ? ns[0] : ns

  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => 
      import(`@/public/locales/${language}/${namespace}.json`)
    ))
    .init(getOptions(lng, normalizedNs)) // Passing the normalized ns
  return i18nInstance
}

export async function useTranslation(
  lng: string, 
  ns: string | string[], 
  options: UseTranslationOptions = {}
): Promise<{ t: TFunction, i18n: i18n }> {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix), // Use the t function with explicit type
    i18n: i18nextInstance
  }
}
