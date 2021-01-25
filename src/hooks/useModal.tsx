import React, { useState } from 'react'

export type ModalProps = {
  children: React.ReactNode
  close: VoidFunction
}
export type Modal = React.FC<ModalProps>

export type UseModal = {
  show: VoidFunction
  hide: VoidFunction
  RenderModal: React.ElementType
}

// Renders a modal to the modal root and handles the visibility state
// of this modal.
//
// NOTE: Each modal you want to render should use a separate hook!!!
// Otherwise your modals will share their visibility state which might lead
// to overlapping and unclosable elements.
export const useModal = (Modal: Modal): UseModal => {
  const [isVisible, setIsVisible] = useState(false)

  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  const RenderModal = ({ children }: { children: React.ReactChild }) => (
    <React.Fragment>
      {isVisible && <Modal close={hide}>{children}</Modal>}
    </React.Fragment>
  )

  return {
    show,
    hide,
    RenderModal
  }
}

export default useModal
