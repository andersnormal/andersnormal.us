import React from 'react'
import { Page } from '../../generated-types'
import NextChakraLink from './NextChakraLink'
import { Box } from '@chakra-ui/react'

interface FooterMenuItemProps {
  page: Pick<Page, 'id' | 'title' | 'slug'>
}

const HeaderMenuItem = ({ page }: FooterMenuItemProps): JSX.Element => {
  return (
    <NextChakraLink href={`/${page.slug}`}>
      <Box
        mr={[4, 6, 7, 12]}
        fontSize={{ base: '20px', md: '22px', lg: '24px' }}
      >
        {page.title}
      </Box>
    </NextChakraLink>
  )
}

export default HeaderMenuItem
