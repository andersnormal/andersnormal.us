import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './Header'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaulLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <>
      <Header></Header>
    </>
  )
}

export default DefaulLayout
