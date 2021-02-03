import { extendTheme } from '@chakra-ui/react'
import { Style as CustomButton } from '@components/forms/Button'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  components: {
    CustomButton
  }
}

const theme = extendTheme({ config })

export default theme
