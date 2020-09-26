import React, { useCallback } from 'react'
import { Form } from '@unform/web'

import Modal from '../../styles/Layout/Modal'
import Input from '../Input'
import TextArea from '../TextArea'

import { CreateScopedStyle } from './styles'

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const XPCreateModal: React.FC<IProps> = ({ setShowModal }) => {
  const handleSubmit = useCallback((data) => {
    console.log(data)
  }, [])

  return (
    <Modal setShowModal={setShowModal}>
      <CreateScopedStyle>
        <h1>Criar nova XP</h1>
        <p>Cadastre uma nova experiência.</p>

        <Form onSubmit={handleSubmit}>
          <Input content='Título' name='title' />
          <TextArea name='content' content='Conteúdo' />
          <button type='submit' className='button-xps'>
            Cadastrar
          </button>
        </Form>
      </CreateScopedStyle>
    </Modal>
  )
}

export default XPCreateModal
