import React, { useState } from 'react'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import FooterMenu from './FooterMenu'
import Boilerplate from './Boilerplate'
import { useIntl } from 'react-intl'

const Footer = props => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="gray.900"
      {...props}
    >
      <FooterMenu items={[]} />
      <Boilerplate />
    </Flex>
  )
}

export default Footer
