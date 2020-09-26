import React from 'react'
import { Link } from 'react-router-dom'
import { shade } from 'polished'

import { Container } from './styles'

interface IProps {
  path: string
}

const Button: React.FC<IProps> = ({ path, children }) => {
  return (
    <Container>
      <Link to={path}>{children}</Link>
    </Container>
  )
}

export default Button
