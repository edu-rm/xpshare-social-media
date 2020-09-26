import React, { useCallback } from 'react'
import { Form } from '@unform/web'
import { useAuth } from '../../hooks/AuthContext'
import Input from '../Input'
import Modal from '../../styles/Layout/Modal'

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface ILoginData {
  email: string
  password: string
}

const SignUpModal: React.FC<IProps> = ({ setShowModal }) => {
  const { signIn } = useAuth()
  const handleSubmit = useCallback((data: ILoginData) => {
    signIn(data)
  }, [])

  return (
    <Modal setShowModal={setShowModal}>
      <h1>Entre na XP share</h1>
      <p>Faça login na comunidade XP share.</p>
      <Form onSubmit={handleSubmit}>
        <Input content='Seu email' name='email' />
        <Input content='Sua senha' name='password' type='password' />
        <button type='submit' className='button-xps'>
          Logar
        </button>
      </Form>
    </Modal>
  )
}

export default SignUpModal
