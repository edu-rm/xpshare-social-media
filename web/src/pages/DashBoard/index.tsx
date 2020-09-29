import React, { useState, useEffect } from 'react'

import { Container, Wrapper, Left, Right } from './styles'
import Header from '../../components/Header'
import MyXps from '../../components/MyXps'
import Feed from '../../components/Feed'
import XPCreateModal from '../../components/XPCreateModal'
import ProfileConfigModal from '../../components/ProfileConfigModal'
import { useAuth } from '../../hooks/AuthContext'

import { Layout } from '../../styles/Layout'

import Illustration from '../../assets/Illustration.svg'
import api from '../../services/apiClient'

const DashBoard: React.FC = () => {
  const { user } = useAuth()
  const [showCreateFormModal, setShowCreateFormModal] = useState<boolean>(false)
  const [showProfileConfigModal, setShowProfileConfigModal] = useState<boolean>(
    false
  )

  return (
    <Layout>
      <Header
        setShowCreateFormModal={setShowCreateFormModal}
        setShowProfileConfigModal={setShowProfileConfigModal}
      />
      <Wrapper>
        <Container>
          <Left>
            <div className='welcome'>
              <div className='text'>
                <h1>Olá {user.name}!</h1>
                <p>É bom vê-lo</p>
              </div>
              <img src={Illustration} alt='olá' />
            </div>
            <MyXps setShowCreateFormModal={setShowCreateFormModal} />
          </Left>
          <Right>
            <Feed />
          </Right>
        </Container>
      </Wrapper>
      {showCreateFormModal && (
        <XPCreateModal setShowModal={setShowCreateFormModal} />
      )}
      {showProfileConfigModal && (
        <ProfileConfigModal setShowModal={setShowProfileConfigModal} />
      )}
    </Layout>
  )
}

export default DashBoard
