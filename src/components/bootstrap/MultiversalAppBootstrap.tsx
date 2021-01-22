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

const MultiversalAppBootstrap = (props): JSX.Element => {
  const { pageProps, router } = props
  const { locale } = router

  const bootstrapProps = {
    ...props,
    router,
    pageProps: { ...pageProps }
  }

  useEffect(() => router.pathname === '' && router.push(`/${locale}`))

  return (
    <GlobalContextProvider>
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  )
}

export default appWithTranslation(MultiversalAppBootstrap)
