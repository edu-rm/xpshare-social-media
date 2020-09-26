import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeaderStyled = styled.div`
  box-shadow: 8px 8px 20px 2px rgba(0, 0, 0, 0.3);

  border-radius: 20px;
  width: 80%;
  height: 90vh;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  h1 {
    color: #fff;
    font-size: 42px;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    button + button {
      margin-top: 50px;
    }
  }

  path,
  svg,
  circle,
  line {
    color: #fff;
  }
`
