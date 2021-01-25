import React, { useState } from 'react'
import { Box, Heading, Flex, Text, Container, Button } from '@chakra-ui/react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'

const Header = (props): JSX.Element => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Container
      maxW={['640px', '768px', '1024px', '1280px']}
      position={'fixed'}
      margin={'auto'}
      left={0}
      right={0}
    >
      <Flex
        as="nav"
        wrap="wrap"
        py={{ base: '1.5rem', md: '2.5rem', xl: '3.5rem' }}
        px={{ base: '1.5rem' }}
        color="gray.900"
        alignItems={'center'}
        {...props}
      >
        <Flex height={{ base: '25px', lg: '39px' }} width={'239px'}>
          <Logo />
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
