import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps } from '@utils/nextjs/SSG'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { CommonServerSideParams } from '@type/nextjs/CommonServerSideParams'

export const getStaticProps: GetStaticProps<
  SSGPageProps,
  CommonServerSideParams
> = getCommonStaticProps

const About: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <>
      <h1>{'Hello'}</h1>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <p>Identified locales: {JSON.stringify(locale)}</p>
      <p>Default locales: {JSON.stringify(defaultLocale)}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
    </>
  )
}

export default About
