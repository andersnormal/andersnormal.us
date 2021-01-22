import React, { useState } from 'react'
import { Container, Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import FooterMenu from './FooterMenu'
import { MenuItem } from './FooterMenuItem'
import Boilerplate from './Boilerplate'

type FooterProps = {
  items: MenuItem[]
}

const Footer = (props: FooterProps): JSX.Element => {
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
        <FooterMenu items={props.items} />
        <Boilerplate data-testid="boilerplate" />
      </Flex>
    </Container>
  )
}

export default Footer
