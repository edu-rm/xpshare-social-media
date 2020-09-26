import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100% - 160px);

  .myxps-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;
  }
`
export const Items = styled(PerfectScrollbar)`
  height: 100%;
  * {
    opacity: 1;
  }

  .item {
    display: flex;
    border-radius: 20px;
    background: #f5f5f7;
    padding: 20px;

    & + div {
      margin-top: 20px;
    }

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      margin-right: 20px;
      border-radius: 50%;
    }

    .actions {
      display: flex;
      align-items: center;
      margin-left: 6px;

      button + button {
        margin-left: 12px;
      }
    }
  }
`
