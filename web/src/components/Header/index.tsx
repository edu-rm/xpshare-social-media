import React, { useCallback } from 'react'

import { BiExit } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { FiPlusCircle } from 'react-icons/fi'
import { BsGear } from 'react-icons/bs'
import { useAuth } from '../../hooks/AuthContext'

import { Container, HeaderStyled } from './styles'

interface IProps {
  setShowCreateFormModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowProfileConfigModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<IProps> = ({
  setShowCreateFormModal,
  setShowProfileConfigModal
}) => {
  const { signOut } = useAuth()
  const handleShowCreateXpForm = useCallback(() => {
    setShowCreateFormModal(true)
  }, [])

  const handleConfigModal = useCallback(() => {
    setShowProfileConfigModal(true)
  }, [])

  return (
    <Container>
      <HeaderStyled>
        <h1>XP</h1>

        <div className='menu'>
          <button>
            <AiOutlineHome size={28} />
          </button>
          <button onClick={handleShowCreateXpForm}>
            <FiPlusCircle size={28} />
          </button>
          <button onClick={handleConfigModal}>
            <BsGear size={28} />
          </button>
        </div>

        <button onClick={signOut}>
          <BiExit size={28} />
        </button>
      </HeaderStyled>
    </Container>
  )
}

export default Header
