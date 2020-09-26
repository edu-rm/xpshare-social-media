import { createGlobalStyle } from 'styled-components'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { shade } from 'polished'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* font-family: 'Baloo Bhai 2', cursive; */
    font-family:  'Arvo', serif;
    color: #292929;

  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }


  body {
    -webkit-font-smoothing: antialiased ;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .button-xps {
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
