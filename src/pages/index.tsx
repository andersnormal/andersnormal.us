import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import DefaultLayout from '@components/layout/DefaultLayout'

const Home: NextPage = ({ children }): JSX.Element => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return <DefaultLayout>{children}</DefaultLayout>
}

export default Home
