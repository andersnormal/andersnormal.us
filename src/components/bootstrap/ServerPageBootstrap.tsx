import React from 'react'

import { MultiversalAppBootstrapPageProps } from '@type/nextjs/MultiversalAppBootstrapPageProps'
import { MultiversalAppBootstrapProps } from '@type/nextjs/MultiversalAppBootstrapProps'
import { MultiversalPageProps } from '@type/page/MultiversalPageProps'
import { OnlyServerPageProps } from '@type/page/OnlyServerPageProps'

export type ServerPageBootstrapProps = MultiversalAppBootstrapProps<
  MultiversalPageProps & MultiversalAppBootstrapPageProps
>

/**
 * Bootstraps the page, only when rendered on the server
 *
 * @param props
 */
const ServerPageBootstrap = (props: ServerPageBootstrapProps): JSX.Element => {
  const { Component, err } = props
  // When the page is served by the server, some server-only properties are available
  const pageProps = (props.pageProps as unknown) as MultiversalPageProps<OnlyServerPageProps>
  const injectedPageProps: MultiversalPageProps<OnlyServerPageProps> = {
    ...pageProps
  }

  return (
    <Component
      {...injectedPageProps}
      // @ts-ignore
      error={err}
    />
  )
}

export default ServerPageBootstrap
