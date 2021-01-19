import React, { useState } from 'react'
import { Box, Heading, Flex, Text, Container, Button } from '@chakra-ui/react'
import HeaderMenu from './HeaderMenu'

const Header = props => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Container maxW={['640px', '768px', '1024px', '1280px']}>
      <Flex
        as="nav"
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
      </Flex>
    </Container>
  )
}

export default Header
