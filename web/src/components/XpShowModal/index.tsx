import React, { useCallback } from 'react'
import { Form } from '@unform/web'

import Modal from '../../styles/Layout/Modal'
import Input from '../Input'
import TextArea from '../TextArea'

import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
  setShowCreateFormModal: React.Dispatch<React.SetStateAction<boolean>>
}

const XPShowModal: React.FC<IProps> = ({ setShowCreateFormModal }) => {
  const handleCloseCreateForm = useCallback(() => {
    setShowCreateFormModal(false)
  }, [])

  const handleSubmit = useCallback((data) => {
    console.log(data)
  }, [])

  return (
    <>
      <button id='close'>
        <AiOutlineClose
          onClick={handleCloseCreateForm}
          size={20}
          color='#029e74'
        />
      </button>
      <h1>Criar nova XP</h1>
      <p>Cadastre uma nova experiência.</p>

      <Form onSubmit={handleSubmit}>
        <Input content='Título' name='title' />
        <TextArea name='content' content='Conteúdo' />
        <button type='submit'>Cadastrar</button>
      </Form>
    </>
  )
}

export default XPShowModal
