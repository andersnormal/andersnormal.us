import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import ChatButton from './ChatButton'
import Head, { HeadProps } from './Head'

type DefaultLayoutProps = {
  children: React.ReactNode
  headProps: HeadProps
}

const DefaultLayout = ({
  children,
  headProps = {}
}: DefaultLayoutProps): JSX.Element => {
  return (
    <>
      <Head {...headProps} />
      <ChatButton />
      <Header />
      <Container
        maxW={['640px', '768px', '1024px', '1280px']}
        paddingTop={{ base: '3rem', md: '4rem', xl: '6rem' }}
      >
        {children}
      </Container>
      <Footer items={[]} />
      <div id="modal-root" />
    </>
  )
}

export default DefaultLayout
