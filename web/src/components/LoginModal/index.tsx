import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { useAuth } from '../../hooks/AuthContext'
import Input from '../Input'
import Modal from '../../styles/Layout/Modal'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface ILoginData {
  email: string
  password: string
}

interface IErrorObject {
  [key: string]: string
}

const SignUpModal: React.FC<IProps> = ({ setShowModal }) => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()

  const handleSubmit = useCallback(async (data: ILoginData) => {
    try {
      const schema = Yup.object().shape({
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
    signIn(data)
  }, [])

  return (
    <Modal setShowModal={setShowModal}>
      <h1>Entre na XP share</h1>
      <p>Faça login na comunidade XP share.</p>
      <Form ref={formRef} onSubmit={handleSubmit}>
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
