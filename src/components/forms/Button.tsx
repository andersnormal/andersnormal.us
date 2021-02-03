import React from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

export const Style = {
  CustomButton: {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === 'dark' ? 'green.300' : 'green.500',
      color: colorMode === 'dark' ? 'gray.800' : 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '0.02em',
      padding: '4px',
      borderRadius: '2px',
      fontSize: '14px'
    })
  }
}

export function CustomButton(props) {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig('CustomButton', { size, variant })
  return <Box as="button" sx={styles} {...rest} />
}

export default CustomButton
