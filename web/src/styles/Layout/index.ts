import styled, { keyframes } from 'styled-components'

const animationDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${animationDown} 1s;
`
