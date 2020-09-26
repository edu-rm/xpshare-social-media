import React, { useCallback, useState } from 'react'

import { Container, Header, Body } from './styles'

import SignUpModal from '../../components/SignUpModal'
import LoginModal from '../../components/LoginModal'

const SignIn: React.FC = () => {
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false)
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false)

  const handleShowRegisterForm = useCallback(() => {
    setShowRegisterForm(true)
  }, [])

  const handleShowLoginForm = useCallback(() => {
    setShowLoginForm(true)
  }, [])

  return (
    <Container>
      <Header>
        <h1>XP share</h1>
        <div className='options'>
          <button onClick={handleShowLoginForm}>Login</button>
          <button onClick={handleShowRegisterForm} id='get-started'>
            Get started
          </button>
        </div>
      </Header>
      <Body>
        <h1>
          Já pensou se você pudesse adquirir experiências já vividas por outras
          pessoas?
        </h1>
        <h2>
          Agora você pode! Tenha acesso a diversas experiências relatadas por
          todos os tipos de pessoas e em diversos âmbitos. E não esqueça de
          postar as suas também.
        </h2>
      </Body>
      <button onClick={handleShowRegisterForm} id='get-started'>
        Get started
      </button>
      {showRegisterForm && <SignUpModal setShowModal={setShowRegisterForm} />}
      {showLoginForm && <LoginModal setShowModal={setShowLoginForm} />}
    </Container>
  )
}

export default SignIn
