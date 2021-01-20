import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import {
  Box,
  Heading,
  Spacer,
  Flex,
  Text,
  Button,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'

const Boilerplate = props => {
  const { formatMessage } = useIntl()
  const f = id => formatMessage({ id })
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <Box
      display={{ sm: 'block', lg: 'flex' }}
      width={{ sm: 'full', lg: '100%' }}
      justifyContent="space-between"
      {...props}
      data-testid="boilerplate"
    >
      <Box w={{ lg: '33%' }} my={[4]}>
        <Heading
          m={0}
          as="h1"
          fontSize={{ base: '32px', md: '38px', lg: '56px' }}
        >
          {f('jingle')}
        </Heading>
      </Box>
      <Box w={{ lg: '33%' }} my={[4]}>
        <Heading
          as="h4"
          fontSize={{ base: '20px', md: '22px', lg: '24px' }}
          my={[4]}
        >
          AndersNormal GmbH & Co KG
        </Heading>
        <Text>
          Köbisstr. 5 <br />
          10785 Berlin
        </Text>
      </Box>
      <Box w={{ lg: '33%' }} my={[4]}>
        <Heading
          as="h4"
          fontSize={{ base: '20px', md: '22px', lg: '24px' }}
          my={[4]}
        >
          {f('startDialog')}
        </Heading>
        <UnorderedList styleType="none" m={0}>
          <ListItem>+49 (0)30 000 000</ListItem>
          <ListItem>ping@andersnormal.us</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  )
}

export default Boilerplate
