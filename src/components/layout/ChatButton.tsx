import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FaVideo } from 'react-icons/fa'
import useModal from '@hooks/useModal'
import Modal from '@components/modal/modal'

const ChatButton = props => {
  const { show, RenderModal } = useModal(Modal)

  return (
    <>
      <RenderModal>
        <p>Test</p>
      </RenderModal>
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
        outline={'none'}
        _hover={{ bg: '#fff', color: '#000' }}
        _active={{
          transform: 'translate3d(-50%,-25%,0)'
        }}
        _focus={{
          borderColor: 'black'
        }}
        onClick={show}
      >
        <FaVideo style={{ marginRight: 4 }} />
        <Text px={2}>Let&apos;s have a chat!</Text>
      </Box>
    </>
  )
}

export default ChatButton
