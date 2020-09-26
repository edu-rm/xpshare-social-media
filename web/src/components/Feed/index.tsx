import React from 'react'

import { Container, Posts, Post } from './styles'

const Feed: React.FC = () => {
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
        <Post>
          <div className='post-header'>
            <img
              src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
              alt='usuario avatar'
            />
            <h5>Vendas: como masterizei a habilidade de vendas.</h5>
          </div>
          <div className='post-body'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              animi voluptas beatae quaerat, dolor odio autem officiis! Aperiam
              non itaque modi officiis officia in, amet soluta quia ea, ad
              dolorum?
            </p>
          </div>
          <div className='post-actions'>
            <button className='button-xps'>Ver mais</button>
          </div>
        </Post>
        <Post>
          <div className='post-header'>
            <img
              src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
              alt='usuario avatar'
            />
            <h5>Vendas: como masterizei a habilidade de vendas.</h5>
          </div>
          <div className='post-body'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              animi voluptas beatae quaerat, dolor odio autem officiis! Aperiam
              non itaque modi officiis officia in, amet soluta quia ea, ad
              dolorum?
            </p>
          </div>
          <div className='post-actions'>
            <button className='button-xps'>Ver mais</button>
          </div>
        </Post>
        <Post>
          <div className='post-header'>
            <img
              src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
              alt='usuario avatar'
            />
            <h5>Vendas: como masterizei a habilidade de vendas.</h5>
          </div>
          <div className='post-body'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              animi voluptas beatae quaerat, dolor odio autem officiis! Aperiam
              non itaque modi officiis officia in, amet soluta quia ea, ad
              dolorum?
            </p>
          </div>
          <div className='post-actions'>
            <button className='button-xps'>Ver mais</button>
          </div>
        </Post>
        <Post>
          <div className='post-header'>
            <img
              src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
              alt='usuario avatar'
            />
            <h5>Vendas: como masterizei a habilidade de vendas.</h5>
          </div>
          <div className='post-body'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              animi voluptas beatae quaerat, dolor odio autem officiis! Aperiam
              non itaque modi officiis officia in, amet soluta quia ea, ad
              dolorum?
            </p>
          </div>
          <div className='post-actions'>
            <button className='button-xps'>Ver mais</button>
          </div>
        </Post>
        <Post>
          <div className='post-header'>
            <img
              src='https://img.elo7.com.br/product/zoom/2C3FEEB/avatar-caricatura-digital.jpg'
              alt='usuario avatar'
            />
            <h5>Vendas: como masterizei a habilidade de vendas.</h5>
          </div>
          <div className='post-body'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              animi voluptas beatae quaerat, dolor odio autem officiis! Aperiam
              non itaque modi officiis officia in, amet soluta quia ea, ad
              dolorum?
            </p>
          </div>
          <div className='post-actions'>
            <button className='button-xps'>Ver mais</button>
          </div>
        </Post>
      </Posts>
    </Container>
  )
}

export default Feed
