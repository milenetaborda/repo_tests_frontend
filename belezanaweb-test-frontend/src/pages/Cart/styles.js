import styled from 'styled-components'

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-transform: uppercase;

    margin: 10px 20px;
  }

  section {
    background: #fff;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

    > div {
      display: flex;
      list-style-type: none;
      border: 1px solid #eee;
      border-radius: 3px;
      padding: 0.75rem;
      margin: 0.75rem;

      img {
        height: 64px;
        width: 64px;
        margin: 10px;
      }

      span {
        margin: 2vw;
        color: #212122;
        font-size: 13px;
        line-height: 16px;
      }
    }
  }
`
