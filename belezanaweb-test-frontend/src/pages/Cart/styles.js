import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-transform: uppercase;

    margin: 20px 0 5px 20px;
  }

  section {
    background: #fff;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

    > div {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      border: 1px solid #eee;
      border-radius: 3px;
      margin: 0.75rem;

      img {
        height: 64px;
        width: 64px;
        margin: 15px;
      }

      span {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #212122;
        font-size: 13px;
        line-height: 16px;
        text-align: right;
        margin: 15px;

        strong {
          color: #212122;
          font-size: 14px;
          font-weight: 700;
          line-height: 17px;
          margin-top: 15px;
        }
      }
    }
  }
`
