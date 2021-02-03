import { extendTheme } from '@chakra-ui/react'

const config = {
  config: { initialColorMode: 'light', useSystemColorMode: false },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  }
}

const theme = extendTheme({ ...config })

export default theme
