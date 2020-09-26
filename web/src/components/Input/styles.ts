import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

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
    margin-top: 20px;
  }
`
