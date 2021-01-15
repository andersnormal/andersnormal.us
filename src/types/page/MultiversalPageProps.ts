import { NormalizedCacheObject } from 'apollo-cache-inmemory'
// import { I18nextResources } from '../../utils/i18n/i18nextLocize'
// import { Customer } from '../data/Customer'

/**
 * Page properties available on all pages, whether they're rendered statically, dynamically, from the server or the client
 *
 * Multiversal page props are listed in MultiversalPageProps
 * Server-side page props are listed in SSRPageProps
 * Client-side page props are listed in SSGPageProps
 */
export type MultiversalPageProps<E extends {} = {}> = {
  apolloState: NormalizedCacheObject
  // bestCountryCodes: string[]
  // customerRef: string
  error?: Error // Only defined if there was an error
  // gcmsLocales: string
  hasLocaleFromUrl: boolean
  isReadyToRender: boolean
  lang: string
  locale: string
  statusCode?: number // Provided by Next.js framework, sometimes
} & E
