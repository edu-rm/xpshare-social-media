import styled, { css, keyframes } from 'styled-components'

interface IContainerProps {
  error: boolean
}

const animationLeftRight = keyframes`
  0% {
    transform: translateX(-10px);
  }
  25% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0px);
  }
`

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  text-align: center;

  span {
    position: absolute;
    bottom: -16px;
    font-size: 13px;
    color: red;
  }

  input {
    text-align: center;
    padding: 6px 20px;
    color: #292929;
    width: 300px;
    border: 0;
    border-bottom: 1px solid #292929;
    font-size: 16px;
  }

  & + div {
    margin-top: 28px;
  }

  ${(props) =>
    props.error &&
    css`
      animation: ${animationLeftRight} 0.3s;

      input {
        border-bottom: 1px solid red;
      }
    `}
`
