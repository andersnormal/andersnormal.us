import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from '@apollo/client'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'

import { LayoutQueryDocument } from '../../generated-types'
import { CommonServerSideParams } from '../../types/nextjs/CommonServerSideParams'
import { ApolloQueryOptions } from '@type/gql/ApolloQueryOptions'
import { SSRPageProps } from '@type/page/SSRPageProps'
import createApolloClient from '@utils/graphql'

/**
 * getExamplesCommonServerSideProps returns only part of the props expected in SSRPageProps
 * To avoid TS issue, we omit those that we don't return, and add those necessary to the getServerSideProps function
 */
export type GetCommonServerSidePropsResults = Omit<
  SSRPageProps,
  'apolloState' | 'customer'
> & {
  apolloClient: ApolloClient<NormalizedCacheObject>
  layoutQueryOptions: ApolloQueryOptions
}

/**
 * Only executed on the server side, for every request.
 * Computes some dynamic props that should be available for all SSR pages that use getServerSideProps
 *
 * Because the exact GQL query will depend on the consumer (AKA "caller"), this helper doesn't run any query by itself, but rather return all necessary props to allow the consumer to perform its own queries
 * This improves performances, by only running one GQL query instead of many (consumer's choice)
 *
 * Meant to avoid code duplication
 *
 * @param context
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getCommonServerSideProps: GetServerSideProps<
  GetCommonServerSidePropsResults,
  CommonServerSideParams
> = async (
  context: GetServerSidePropsContext<CommonServerSideParams>
): Promise<GetServerSidePropsResult<GetCommonServerSidePropsResults>> => {
  // TODO Make your own implementation.
  // XXX Having this as separate function helps making your own pages without affecting existing examples under "pages/[locale]/examples".
  //  For instance, you may want to replace the GraphQL query by your own API query, while keeping the existing example pages working.
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getExamplesCommonServerSideProps(context)
}

/**
 * Only executed on the server side, for every request.
 * Computes some dynamic props that should be available for all SSR pages that use getServerSideProps
 *
 * Because the exact GQL query will depend on the consumer (AKA "caller"), this helper doesn't run any query by itself, but rather return all necessary props to allow the consumer to perform its own queries
 * This improves performances, by only running one GQL query instead of many (consumer's choice)
 *
 * Meant to avoid code duplication
 *
 * @param context
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getExamplesCommonServerSideProps: GetServerSideProps<
  GetCommonServerSidePropsResults,
  CommonServerSideParams
> = async (
  context: GetServerSidePropsContext<CommonServerSideParams>
): Promise<GetServerSidePropsResult<GetCommonServerSidePropsResults>> => {
  const { query, params, req, res, locale } = context

  // Resolve locale from query, fallback to browser headers
  const apolloClient = createApolloClient()
  const variables = {}
  const layoutQueryOptions = {
    displayName: 'LAYOUT_QUERY',
    query: LayoutQueryDocument,
    variables,
    context: {
      headers: {
        'gcms-locales': locale
      }
    }
  }

  // Most props returned here will be necessary for the app to work properly (see "SSRPageProps")
  // Some props are meant to be helpful to the consumer and won't be passed down to the _app.render (e.g: apolloClient, layoutQueryOptions)
  return {
    props: {
      apolloClient,
      serializedDataset: null, // We don't send the dataset yet (we don't have any because we haven't fetched the database yet), but it must be done by SSR pages in"getServerSideProps"
      isReadyToRender: true,
      isServerRendering: true,
      layoutQueryOptions,
      locale
    }
  }
}
