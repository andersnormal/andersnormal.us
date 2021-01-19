import React from 'react'
import NextLink from 'next/link'
import { Box, AddIcon, Text, SearchIcon } from '@chakra-ui/react'
import { FaVideo } from 'react-icons/fa'
import Icon from 'react-eva-icons'

const ChatButton = props => {
  return (
    <Box
      as="button"
      display={'flex'}
      position={'fixed'}
      left={'50%'}
      bottom={'5vh'}
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      alignItems={'center'}
      borderRadius={12}
      borderColor={'black'}
      py={4}
      px={8}
      fontSize="18px"
      fontWeight="semibold"
      bg="#000"
      color="#fff"
      transform={'translate3d(-50%,0,0)'}
      _hover={{ bg: '#fff', color: '#000' }}
      _active={{
        bg: '#dddfe2',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9'
      }}
      _focus={{
        borderColor: 'black'
      }}
    >
      <FaVideo style={{ marginRight: 4 }} />
      <Text px={2}>Let&apos;s have a chat!</Text>
    </Box>
  )
}

export default ChatButton
