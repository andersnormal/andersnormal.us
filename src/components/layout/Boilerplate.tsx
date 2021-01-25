import React, { useState } from 'react'
import { useRouter } from 'next/router'
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
import { useTranslation } from 'next-i18next'

const Boilerplate = props => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router
  const { t } = useTranslation('footer')

  return (
    <Box
      display={{ sm: 'block', lg: 'flex' }}
      width={{ sm: 'full', lg: '100%' }}
      justifyContent="space-between"
      data-testid="boilerplate"
      {...props}
    >
      <Box w={{ lg: '33%' }} my={[4]}>
        <Heading
          m={0}
          as="h1"
          fontSize={{ base: '32px', md: '38px', lg: '56px' }}
        >
          {t('jingle')}
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
          {t('startDialog')}
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
