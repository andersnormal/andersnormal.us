import React, { useEffect } from 'react'
import Head from 'next/head'
import { isBrowser } from '@utils/utils'
import { useQuery, gql } from '@apollo/client'
import { LAYOUT_QUERY } from '../../gql/common/layoutQuery'
import { GlobalContextProvider } from '@state/state'
import BrowserPageBootstrap, {
  BrowserPageBootstrapProps
} from '@components/bootstrap/BrowserPageBootstrap'
import ServerPageBootstrap, {
  ServerPageBootstrapProps
} from '@components/bootstrap/ServerPageBootstrap'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '@theme/theme'
import * as locales from '../../../content/locale'
import { IntlProvider } from 'react-intl'
import withApollo from '@hocs/withApollo'

const MultiversalAppBootstrap = (props): JSX.Element => {
  const { pageProps, router } = props
  const { locale, defaultLocale, pathname } = router

  const bootstrapProps = {
    ...props,
    router,
    pageProps: { ...pageProps }
  }

  const localeCopy = locales[locale]
  const messages = localeCopy[pathname]

  useEffect(() => router.pathname === '' && router.push(`/${locale}`))

  return (
    <GlobalContextProvider>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
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
      </IntlProvider>
    </GlobalContextProvider>
  )
}

export default MultiversalAppBootstrap
