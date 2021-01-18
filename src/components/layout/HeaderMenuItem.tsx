import React from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

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
      {item.title}
    </Link>
  )
}

export default HeaderMenuItem
