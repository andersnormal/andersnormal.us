import React from 'react'
import ReactDOM from 'react-dom'
import { Flex } from '@chakra-ui/react'

type Props = {
  children: React.ReactChild
  close: () => void
}

const Modal = ({ children, close }: Props) => {
  const domEl = document.getElementById('modal-root')

  if (!domEl) return null

  // This is where the magic happens -> our modal div will be rendered into our 'modal-root' div, no matter where we
  // use this component inside our React tree
  return ReactDOM.createPortal(
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
    >
      <div>
        <button onClick={close}>Close</button>
        {children}
      </div>
    </Flex>,
    domEl
  )
}

export default Modal
