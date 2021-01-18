import React from 'react'
import { Box } from '@chakra-ui/react'
import HeaderMenuItem, { MenuItem } from './HeaderMenuItem'

interface HeaderMenuProps {
  show: boolean
  items: MenuItem[]
}

const HeaderMenu = ({ show, items }: HeaderMenuProps): JSX.Element => {
  return (
    <Box
      display={{ sm: show ? 'block' : 'none', md: 'flex' }}
      width={{ sm: 'full', md: 'auto' }}
      justifyContent="flex-end"
      alignItems="center"
      flexGrow={1}
    >
      {items.map(item => (
        <HeaderMenuItem key={item.key} item={item}></HeaderMenuItem>
      ))}
    </Box>
  )
}

export default HeaderMenu
