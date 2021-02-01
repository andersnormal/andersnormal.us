import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import FooterMenu from './FooterMenu'
import Boilerplate from './Boilerplate'

const Footer = (props): JSX.Element => {
  return (
    <Container maxW={['640px', '768px', '1024px', '1280px']}>
      <Flex
        as="footer"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        color="gray.900"
        {...props}
      >
        <FooterMenu />
        <Boilerplate data-testid="boilerplate" />
      </Flex>
    </Container>
  )
}

export default Footer
