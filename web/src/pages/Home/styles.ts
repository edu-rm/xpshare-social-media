import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  #get-started {
    text-align: center;
    padding: 8px 20px;
    width: 130px;
    border-radius: 4px;
    background-color: #029e74;
    border: 0;
    color: #fff;
    margin: 0 auto;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${shade(0.1, '#029e74')};
    }
  }
`

export const Header = styled.div`
  margin: 0 auto;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  color: #292929;

  h1 {
    font-size: 28px;
  }

  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;

    button:nth-child(1) {
      color: #292929;
      margin-right: 30px;
    }
  }
`

export const Body = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #292929;

  h1 {
    font-weight: 600;
    font-size: 50px;
    width: 70%;
  }

  h2 {
    margin: 20px 0 60px;
    font-weight: 400;
    font-size: 22px;
    width: 70%;
  }
`
