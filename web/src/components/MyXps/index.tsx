import React, { useCallback } from 'react'

import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'

import { Container, Items } from './styles'
import ButtonDirect from '../../components/ButtonDirect'

interface IProps {
  setShowCreateFormModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MyXps: React.FC<IProps> = ({ setShowCreateFormModal }) => {
  const handleShowCreateModal = useCallback(() => {
    setShowCreateFormModal(true)
  }, [])

  return (
    <Container>
      <div className='myxps-header'>
        <h3>My XPs</h3>
        <button onClick={handleShowCreateModal} className='button-xps'>
          Adicionar
        </button>
      </div>
      <Items
        options={{
          suppressScrollX: true,
          useBothWheelAxes: true
        }}
      >
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
          <div className='actions'>
            <button>
              <FiEdit size={28} />
            </button>
            <button>
              <BsTrash size={28} />
            </button>
          </div>
        </div>
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
          <div className='actions'>
            <button>
              <FiEdit size={28} />
            </button>
            <button>
              <BsTrash size={28} />
            </button>
          </div>
        </div>
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
          <div className='actions'>
            <button>
              <FiEdit size={28} />
            </button>
            <button>
              <BsTrash size={28} />
            </button>
          </div>
        </div>
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
          <div className='actions'>
            <button>
              <FiEdit size={28} />
            </button>
            <button>
              <BsTrash size={28} />
            </button>
          </div>
        </div>
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
          <div className='actions'>
            <button>
              <FiEdit size={28} />
            </button>
            <button>
              <BsTrash size={28} />
            </button>
          </div>
        </div>{' '}
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
          <div className='actions'>
            <button>
              <FiEdit size={28} />
            </button>
            <button>
              <BsTrash size={28} />
            </button>
          </div>
        </div>{' '}
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
          <div className='actions'>
            <button>
              <FiEdit size={28} />
            </button>
            <button>
              <BsTrash size={28} />
            </button>
          </div>
        </div>
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
        </div>
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
        </div>
        <div className='item'>
          <img
            src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
            alt=''
          />
          <div className='content'>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
              aliquam adipisci ...
            </p>
          </div>
        </div>
      </Items>
    </Container>
  )
}

export default MyXps
