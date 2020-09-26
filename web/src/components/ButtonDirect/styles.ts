import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  a {
    color: #fff;
    border: 0;
    background-color: #292929;
    width: 130px;

    padding: 8px 20px;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.3, '#292929')};
    }
  }
`
