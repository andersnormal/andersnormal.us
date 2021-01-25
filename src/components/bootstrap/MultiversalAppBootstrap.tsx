import React, { useEffect } from 'react'
import Head from 'next/head'
import path from 'path'
import { isBrowser } from '@utils/utils'
import { GlobalContextProvider } from '@state/state'
import BrowserPageBootstrap, {
  BrowserPageBootstrapProps
} from '@components/bootstrap/BrowserPageBootstrap'
import ServerPageBootstrap, {
  ServerPageBootstrapProps
} from '@components/bootstrap/ServerPageBootstrap'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '@theme/theme'
import { appWithTranslation } from 'next-i18next/dist/commonjs'
import { LayoutProvider } from '@state/layout'
import deserializeSafe from '@utils/deserializeSafe'
import { MultiversalAppBootstrapProps } from '@type/nextjs/MultiversalAppBootstrapProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { SSRPageProps } from '@type/page/SSRPageProps'
import { LayoutQueryQueryResult } from '../../generated-types'

export type Props =
  | MultiversalAppBootstrapProps<SSGPageProps>
  | MultiversalAppBootstrapProps<SSRPageProps>

const MultiversalAppBootstrap = (props: Props): JSX.Element => {
  const { pageProps, router } = props
  const { locale } = router

  const bootstrapProps = {
    ...props,
    router,
    pageProps: { ...pageProps }
  }

  const layout: LayoutQueryQueryResult = deserializeSafe(
    bootstrapProps.pageProps.serializedDataset
  )

  return (
    <LayoutProvider value={layout}>
      <GlobalContextProvider>
        <ChakraProvider theme={theme}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <CSSReset />
          {isBrowser() ? (
            <BrowserPageBootstrap
              {...(bootstrapProps as BrowserPageBootstrapProps)}
            />
          ) : (
            <ServerPageBootstrap
              {...(bootstrapProps as ServerPageBootstrapProps)}
            />
          )}
        </ChakraProvider>
      </GlobalContextProvider>
    </LayoutProvider>
  )
}

export default appWithTranslation(MultiversalAppBootstrap)
