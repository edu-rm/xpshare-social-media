import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-left: auto;
  width: 89%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  height: 90%;
  align-self: center;
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  width: 49%;
  height: 100%;
  /* background-color: red; */

  .welcome {
    padding: 20px;
    height: 160px;
    border-radius: 20px;
    background: #f5f5f7;
    display: flex;
    align-items: center;
    position: relative;

    .text {
      max-width: 60%;
    }

    img {
      height: 190px;
      position: absolute;
      right: 30px;
      bottom: 0;
    }
  }
`

export const Right = styled.div`
  width: 49%;
  height: 100%;
`
