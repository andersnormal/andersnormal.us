import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

const About: NextPage = (): JSX.Element => {
  const { formatMessage } = useIntl()
  const f = id => formatMessage({ id })
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <>
      <h1>{f('hello')}</h1>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <p>Identified locales: {JSON.stringify(locale)}</p>
      <p>Default locales: {JSON.stringify(defaultLocale)}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
    </>
  )
}

export default About
