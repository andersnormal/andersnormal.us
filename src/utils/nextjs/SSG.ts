import { ApolloQueryResult } from 'apollo-client'
import { GetStaticProps, GetStaticPropsResult } from 'next'

import { LAYOUT_QUERY } from '../../gql/common/layoutQuery'
import { CommonServerSideParams } from '../../types/nextjs/CommonServerSideParams'
import { PreviewData } from '../../types/nextjs/PreviewData'
import { StaticPropsInput } from '@type/nextjs/StaticPropsInput'
import { SSGPageProps } from '@type/page/SSGPageProps'
import createApolloClient from '@utils/graphql'
import serializeSafe from '@utils/serializeSafe'
import { defaultLocale } from '../../../i18n.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

/**
 * Only executed on the server side at build time.
 * Computes all static props that should be available for all SSG pages
 *
 * Note that when a page uses "getStaticProps", then "_app:getInitialProps" is executed (if defined) but not actually used by the page,
 * only the results from getStaticProps are actually injected into the page (as "SSGPageProps").
 *
 * Meant to avoid code duplication
 * Can be overridden for per-page customisation (e.g: deepmerge)
 *
 * @param props
 * @return Props (as "SSGPageProps") that will be passed to the Page component, as props
 *
 * @see https://github.com/vercel/next.js/discussions/10949#discussioncomment-6884
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getCommonStaticProps: GetStaticProps<
  SSGPageProps,
  CommonServerSideParams
> = async (
  props: StaticPropsInput
): Promise<GetStaticPropsResult<SSGPageProps>> => {
  // TODO Make your own implementation.
  // XXX Having this as separate function helps making your own pages without affecting existing examples under "pages/[locale]/examples".
  //  For instance, you may want to replace the GraphQL query by your own API query, while keeping the existing example pages working.
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getExamplesCommonStaticProps(props)
}

/**
 * XXX This method is meant for people creating their own project based on NRN.
 *  It's meant to be deleted eventually when you don't need to keep the examples around.
 *
 * Only executed on the server side at build time.
 * Computes all static props that should be available for all SSG pages
 *
 * Note that when a page uses "getStaticProps", then "_app:getInitialProps" is executed (if defined) but not actually used by the page,
 * only the results from getStaticProps are actually injected into the page (as "SSGPageProps").
 *
 * Meant to avoid code duplication
 * Can be overridden for per-page customisation (e.g: deepmerge)
 *
 * @param props
 * @return Props (as "SSGPageProps") that will be passed to the Page component, as props
 *
 * @see https://github.com/vercel/next.js/discussions/10949#discussioncomment-6884
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getExamplesCommonStaticProps: GetStaticProps<
  SSGPageProps,
  CommonServerSideParams
> = async (
  props: StaticPropsInput
): Promise<GetStaticPropsResult<SSGPageProps>> => {
  const preview: boolean = props?.preview || false
  const previewData: PreviewData = props?.previewData || null
  const hasLocaleFromUrl = !!props?.params?.locale
  const locale: string = hasLocaleFromUrl
    ? props?.params?.locale
    : defaultLocale
  const apolloClient = createApolloClient()
  const variables = {}
  const queryOptions = {
    displayName: 'LAYOUT_QUERY',
    query: LAYOUT_QUERY,
    variables,
    context: {
      'gcms-locale': locale
    }
  }

  const { data, errors } = await apolloClient.query(queryOptions)

  if (errors) {
    console.error(errors)
    throw new Error('Errors were detected in GraphQL query.')
  }

  return {
    // Props returned here will be available as page properties (pageProps)
    props: {
      apolloState: apolloClient.cache.extract(),
      serializedDataset: serializeSafe(data || {}),
      hasLocaleFromUrl,
      isReadyToRender: true,
      isStaticRendering: true,
      preview,
      previewData,
      ...(await serverSideTranslations(locale, ['common', 'footer']))
    }
    // revalidate: false,
  }
}
