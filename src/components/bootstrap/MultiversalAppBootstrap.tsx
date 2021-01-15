import React, { useEffect } from 'react'
import Head from 'next/head'
import { isBrowser } from '@utils/utils'
import { GlobalContextProvider } from '@state/state'
import BrowserPageBootstrap, {
  BrowserPageBootstrapProps
} from '@components/bootstrap/BrowserPageBootstrap'
import ServerPageBootstrap, {
  ServerPageBootstrapProps
} from '@components/bootstrap/ServerPageBootstrap'
import 'tailwindcss/tailwind.css'

const MultiversalAppBootstrap = (props): JSX.Element => {
  const { pageProps, router } = props
  const { locale } = router

  const bootstrapProps = {
    ...props,
    router,
    pageProps: { ...pageProps }
  }

  console.log(router)

  useEffect(() => router.pathname === '' && router.push(`/${locale}`))

  return (
    <GlobalContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isBrowser() ? (
        <BrowserPageBootstrap
          {...(bootstrapProps as BrowserPageBootstrapProps)}
        />
      ) : (
        <ServerPageBootstrap
          {...(bootstrapProps as ServerPageBootstrapProps)}
        />
      )}
    </GlobalContextProvider>
  )
}

export default MultiversalAppBootstrap
