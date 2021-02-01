import React from 'react'
import { UnorderedList, ListItem } from '@chakra-ui/react'
import { Twitter, GitHub, Facebook, Send } from 'react-feather'
import NextChakraLink from './NextChakraLink'

const SocialItem = ({ children }) => (
  <ListItem
    paddingLeft={{ md: '3rem' }}
    paddingRight={{ base: '3rem', md: '0' }}
  >
    {children}
  </ListItem>
)

const SocialMenu = (props): JSX.Element => {
  return (
    <UnorderedList listStyleType={'none'} margin={0} {...props}>
      <SocialItem>
        <NextChakraLink
          href="https://twitter.com/andersnormal_us"
          isExternal={true}
        >
          <Twitter />
        </NextChakraLink>
      </SocialItem>
      <SocialItem>
        <NextChakraLink
          href="https://github.com/andersnormal"
          isExternal={true}
        >
          <GitHub />
        </NextChakraLink>
      </SocialItem>
      <SocialItem>
        <NextChakraLink
          href="https://facebook.com/andersnormal.dev"
          isExternal={true}
        >
          <Facebook />
        </NextChakraLink>
      </SocialItem>
      <SocialItem>
        <NextChakraLink href="mailto:ping@andersnormal.us" isExternal={true}>
          <Send />
        </NextChakraLink>
      </SocialItem>
    </UnorderedList>
  )
}

export default SocialMenu
