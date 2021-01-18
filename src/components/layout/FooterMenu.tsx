import React from 'react'
import { Box } from '@chakra-ui/react'
import FooterMenuItem, { MenuItem } from './FooterMenuItem'

interface FooterMenuProps {
  items: MenuItem[]
}

const FooterMenu = ({ items }: FooterMenuProps): JSX.Element => {
  return (
    <Box
      width={{ sm: 'full', md: 'auto' }}
      justifyContent="flex-end"
      alignItems="center"
      flexGrow={1}
    >
      {items.map(item => (
        <FooterMenuItem item={item} key={item.key} />
      ))}
    </Box>
  )
}

export default FooterMenu
