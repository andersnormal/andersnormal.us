import React, { useRef } from 'react'
import { Container } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import ChatButton from './ChatButton'
import Head from './Head'
import useLayoutContext from '@hooks/useLayout'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  const layout = useLayoutContext()
  const ref = useRef()

  return (
    <>
      <Head {...{ seoTitle: layout?.page.title }} />
      <ChatButton containerRef={ref} />
      <Header />
      <Container
        maxW={['640px', '768px', '1024px', '1280px']}
        paddingTop={{ base: '3rem', md: '4rem', xl: '6rem' }}
      >
        {children}
      </Container>
      <Footer />
      <div ref={ref} />
    </>
  )
}

export default DefaultLayout
