import React, { useCallback, useState, useEffect } from 'react'
import { useAuth } from '../../hooks/AuthContext'
import { Container, Header, Body } from './styles'
import { BsCheckCircle } from 'react-icons/bs'
import SignUpModal from '../../components/SignUpModal'
import LoginModal from '../../components/LoginModal'

const SignIn: React.FC = () => {
  const { newUserCreated } = useAuth()
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false)
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false)

  useEffect(() => {
    if (newUserCreated) {
      setShowRegisterForm(false)
      setShowLoginForm(true)
    }
  }, [newUserCreated])

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
      {!!newUserCreated && (
        <span id='toast'>
          <BsCheckCircle size={30} color='#E7FAFF' />
          Usuário criado com sucesso, logue-se
        </span>
      )}
    </Container>
  )
}

export default SignIn
