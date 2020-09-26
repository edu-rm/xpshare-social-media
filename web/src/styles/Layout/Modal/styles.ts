import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  overflow: hidden;

  width: 100vw;
  position: absolute;
  z-index: 4;
  background-color: rgba(255, 255, 255, 0.9);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalStyle = styled(animated.div)`
  box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.3);
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;

  button {
    margin-top: 28px;
  }
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button#close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  h1 {
    color: #292929;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 20px;
  }

  > p {
    text-align: center;
    max-width: 50%;
  }

  form {
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
