import React, { useCallback, useState } from 'react'

import { Container, Header, Body } from './styles'

const SignIn: React.FC = () => {
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false)
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false)

  return (
    <Container>
      <Header>
        <h1>XP share</h1>
        <div className='options'>
          <button>Login</button>
          <button id='get-started'>Get started</button>
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
      <button id='get-started'>Get started</button>
    </Container>
  )
}

export default SignIn
