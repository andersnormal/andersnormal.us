import React from 'react'
import { Box } from '@chakra-ui/react'
import FooterMenuItem from './FooterMenuItem'
import useLayoutContext from '@hooks/useLayout'

const FooterMenu = (): JSX.Element => {
  const layout = useLayoutContext()

  return (
    <Box
      width={{ sm: 'full', md: 'auto' }}
      justifyContent="flex-end"
      alignItems="center"
      flexGrow={1}
    >
      {layout?.pages.map(page => (
        <FooterMenuItem key={page.slug} page={page} />
      ))}
    </Box>
  )
}

export default FooterMenu
