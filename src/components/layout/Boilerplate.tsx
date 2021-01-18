import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react'

const Boilerplate = props => {
  const { formatMessage } = useIntl()
  const f = id => formatMessage({ id })
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <Box
      display={{ sm: 'block', lg: 'flex' }}
      width={{ sm: 'full', lg: 'auto' }}
      justifyContent="space-around"
      alignItems="center"
      {...props}
    >
      <Box>
        <Heading as="h1">{f('jingle')}</Heading>
      </Box>
      <Box>
        <Heading as="h4" size="md">
          AndersNormal GmbH & Co KG
        </Heading>
        <Text>
          Köbisstr. 5 <br />
          10785 Berlin
        </Text>
      </Box>
      <Box>
        <Heading as="h4" size="md">
          {f('startDialog')}
        </Heading>
      </Box>
    </Box>
  )
}

export default Boilerplate
