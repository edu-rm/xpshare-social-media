import React, { useEffect, useState } from 'react'

import api from '../../services/apiClient'

import { Container, Posts, Post } from './styles'
interface IFeed {
  id: number
  title: string
  content: string
}

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<IFeed[]>([] as IFeed[])

  useEffect(() => {
    async function requestFeed() {
      try {
        const { data } = await api.get('/xp')
        console.log(data)
        setFeed(data.feed)
      } catch (e) {
        console.log(e)
      }
    }

    requestFeed()
  }, [])

  return (
    <Container>
      <div className='feed-header'>
        <h3>XP share - Feed</h3>
      </div>
      <Posts
        options={{
          suppressScrollX: true,
          useBothWheelAxes: true
        }}
      >
        {feed.map((post) => (
          <Post key={post.id}>
            <div className='post-header'>
              <img
                src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
                alt='usuario avatar'
              />
              <h5>{post.title}</h5>
            </div>
            <div className='post-body'>
              <p>{post.content}</p>
            </div>
            <div className='post-actions'>
              <button className='button-xps'>Ver mais</button>
            </div>
          </Post>
        ))}
      </Posts>
    </Container>
  )
}

export default Feed
