import React, { useState } from 'react'
import { Container, Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import FooterMenu from './FooterMenu'
import Boilerplate from './Boilerplate'
import { useIntl } from 'react-intl'

const Footer = props => {
  return (
    <Flex
      as="footer"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="gray.900"
      {...props}
    >
      <Container maxW={['640px', '768px', '1024px', '1280px']}>
        {/* <FooterMenu items={[]} /> */}
        <Boilerplate />
      </Container>
    </Flex>
  )
}

export default Footer
