import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../hooks/AuthContext'
import api from '../../services/apiClient'
import Input from '../Input'
import Modal from '../../styles/Layout/Modal'
// import history from '../../services/history'
interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface IErrorObject {
  [key: string]: string
}

const SignUpModal: React.FC<IProps> = ({ setShowModal }) => {
  const { handleNewUserCreated } = useAuth()
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um email válido')
          .required('O email é obrigatório'),
        password: Yup.string()
          .min(8, 'A senha precisa ter pelo menos 8 caracteres')
          .required('A senha é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      formRef.current?.setErrors({})
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {} as IErrorObject
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message
        })
        formRef.current?.setErrors(errorMessages)
      }
      return
    }

    try {
      await api.post('/user', data)
      handleNewUserCreated()
    } catch (err) {}
  }, [])

  return (
    <Modal setShowModal={setShowModal}>
      <h1>Faça parte da XP share</h1>
      <p>
        Crie uma conta agora mesmo na comunidade XP share, é rápido e grátis.
      </p>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input content='Seu email' name='email' />
        <Input content='Seu nome' name='name' />
        <Input content='Sua senha' name='password' type='password' />
        <button type='submit' className='button-xps'>
          Cadastrar
        </button>
      </Form>
    </Modal>
  )
}

export default SignUpModal
