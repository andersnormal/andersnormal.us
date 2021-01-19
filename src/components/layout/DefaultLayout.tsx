import React from 'react'
import { Grid, GridItem, Container } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import ChatButton from './ChatButton'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaulLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <>
      <ChatButton />
      <Header />
      <Container
        maxW={['640px', '768px', '1024px', '1280px']}
        paddingTop={{ base: '3rem', md: '4rem', xl: '6rem' }}
      >
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default DefaulLayout
