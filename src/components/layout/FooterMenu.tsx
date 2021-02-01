import React from 'react'
import { Flex } from '@chakra-ui/react'
import FooterMenuItem from './FooterMenuItem'
import useLayoutContext from '@hooks/useLayout'

const FooterMenu = (): JSX.Element => {
  const layout = useLayoutContext()

  return (
    <Flex alignItems="center" my={[4, 6, 8, 12]}>
      {layout?.pages.map(page => (
        <FooterMenuItem key={page.slug} page={page} />
      ))}
    </Flex>
  )
}

export default FooterMenu
