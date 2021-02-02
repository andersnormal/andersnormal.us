import React from 'react'
import { Flex, Container } from '@chakra-ui/react'
import SocialMenu from './SocialMenu'
import Logo from './Logo'
import NextChakraLink from './NextChakraLink'

const Header = (props): JSX.Element => {
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
        <NextChakraLink href={'/'}>
          <Logo
            height={{ base: '25px', lg: '39px' }}
            width={{ base: '179px', md: '189px', lg: '219px', xl: '239px' }}
          />
        </NextChakraLink>

        <SocialMenu
          display={{ base: 'none', md: 'flex' }}
          justifyContent={'flex-end'}
          flexGrow={1}
        />
      </Flex>
    </Container>
  )
}

export default Header
