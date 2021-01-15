import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const About: NextPage = (): JSX.Element => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <>
      <h1>About</h1>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <p>Identified locales: {JSON.stringify(locale)}</p>
      <p>Default locales: {JSON.stringify(defaultLocale)}</p>
    </>
  )
}

export default About
