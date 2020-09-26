import React, { useCallback } from 'react'
import { useSpring } from 'react-spring'
import { AiOutlineClose } from 'react-icons/ai'

import { Container, ModalStyle, ModalWrapper } from './styles'

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<IProps> = ({ setShowModal, children }) => {
  const transition = useSpring({
    from: { transform: 'translateY(100px)', opacity: 0.2 },
    to: { transform: 'translateY(0px)', opacity: 1 }
  })

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <Container>
      <ModalWrapper>
        <ModalStyle style={transition}>
          <button id='close'>
            <AiOutlineClose
              onClick={handleCloseModal}
              size={20}
              color='#029e74'
            />
          </button>
          {children}
        </ModalStyle>
      </ModalWrapper>
    </Container>
  )
}

export default Modal
