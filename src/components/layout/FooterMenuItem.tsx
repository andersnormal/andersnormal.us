import React from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { Page } from '../../generated-types'

interface FooterMenuItemProps {
  page: Pick<Page, 'id' | 'title' | 'slug'>
}

const HeaderMenuItem = ({ page }: FooterMenuItemProps): JSX.Element => {
  return (
    <Link as={NextLink} href={`/${page.slug}`}>
      {page.title}
    </Link>
  )
}

export default HeaderMenuItem
