import { extendTheme } from '@chakra-ui/react'

const config = {
  config: { initialColorMode: 'light', useSystemColorMode: false },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif'
  }
}

const theme = extendTheme({ ...config })

export default theme
