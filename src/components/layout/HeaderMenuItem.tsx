import React from 'react'
import NextLink from 'next/link'
import { Link, Box } from '@chakra-ui/react'

interface HeaderMenuItemProps {
  item: MenuItem
}

export type MenuItem = {
  key: string
  title: string
  href: string
}

const HeaderMenuItem = ({ item }: HeaderMenuItemProps): JSX.Element => {
  return (
    <Link as={NextLink} href={item.href}>
      <Box
        ml={[2, 4, 6, 8]}
        fontSize={{ base: '20px', md: '22px', lg: '24px' }}
      >
        {item.title}
      </Box>
    </Link>
  )
}

export default HeaderMenuItem
