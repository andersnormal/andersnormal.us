import React from 'react'
import ReactDOM from 'react-dom'
import { Flex } from '@chakra-ui/react'
import { Fade, Container, Box, CloseButton } from '@chakra-ui/react'
import { Modal } from '@hooks/useModal'

const Overlay: Modal = ({ children, close, show }) => {
  const domEl = document.getElementById('modal-root')

  if (!domEl) return null

  return ReactDOM.createPortal(
    <Fade in={show}>
      <Flex
        position={'fixed'}
        display={''}
        zIndex={5}
        height={'100vh'}
        overflowY={'auto'}
        background={'black'}
        top={0}
        left={0}
        right={0}
        color={'white'}
      >
        <Container maxW={['640px', '768px', '1024px']}>
          <Flex justifyContent={'flex-end'}>
            <Box>
              <CloseButton onClick={close} size={'lg'} />
            </Box>
          </Flex>
          {children}
        </Container>
      </Flex>
    </Fade>,
    domEl
  )
}

export default Overlay
