import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaulLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default DefaulLayout
