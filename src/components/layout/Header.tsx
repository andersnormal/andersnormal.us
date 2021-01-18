import React, { useState } from 'react'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import HeaderMenu from './HeaderMenu'

const Header = props => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      // bg="teal.500"
      color="gray.900"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Chakra UI
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <HeaderMenu
        items={[
          { key: 'test', title: 'Services', href: '/products' },
          { key: 'test', title: 'Contact', href: '/products' }
        ]}
        show={show}
      />

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
    </Flex>
  )
}

export default Header
