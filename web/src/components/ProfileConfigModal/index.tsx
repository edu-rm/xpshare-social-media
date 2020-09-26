import React, { Dispatch, SetStateAction, useCallback } from 'react'
// import { Form } from '@unform/web'

// import Input from '../Input'
import Modal from '../../styles/Layout/Modal'

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const ProfileConfigModal: React.FC<IProps> = ({ setShowModal }) => {
  // const handleSubmit = useCallback((data) => {
  //   console.log(data)
  // }, [])

  return (
    <Modal setShowModal={setShowModal}>
      {/* <h1>Faça parte da XP share</h1>
        <p>
          Crie uma conta agora mesmo na comunidade XP share, é rápido e grátis.
        </p> */}
      {/* <Form onSubmit={handleSubmit}>
          <Input content='Seu email' name='email' />
          <Input content='Seu nome' name='name' />
          <Input content='Sua senha' name='password' type='password' />
          <button type='submit'>Cadastrar</button>
        </Form> */}
    </Modal>
  )
}

export default ProfileConfigModal
