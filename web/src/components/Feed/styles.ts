import styled from 'styled-components'

import PerfectScrollbar from 'react-perfect-scrollbar'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  .feed-header {
    font-size: 20px;
  }
`

export const Posts = styled(PerfectScrollbar)`
  width: 95%;
  margin-top: 20px;
`

export const Post = styled.div`
  display: flex;
  border-radius: 20px;
  background: #f5f5f7;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 20px;
  }

  .post-header {
    display: flex;
    align-items: center;

    h5 {
      font-size: 16px;
    }

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      margin-right: 20px;
      border-radius: 50%;
    }
  }

  .post-body {
    margin: 20px 0;
  }

  .post-actions {
    display: flex;
    justify-content: flex-end;
  }
`
