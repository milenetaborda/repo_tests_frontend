import styled from 'styled-components'

export const SuccessContainer = styled.div`
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      height: 39.51px;
      width: 39.51px;
      margin: 15px 0 12px;
    }

    > p {
      text-transform: uppercase;
      color: #ff7800;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
    }
  }

  h1 {
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-transform: uppercase;

    margin: 20px 0 5px 20px;
  }
`

export const SuccessPaymentContainer = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 15px;
  text-transform: uppercase;
`

export const SuccessCartContainer = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 15px;

  section {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    border: 1px solid #eee;
    border-radius: 3px;
    align-items: center;
    margin: 15px;

    img {
      height: 64px;
      width: 64px;
      margin: 15px;
    }

    > p {
      color: #212122;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      padding: 15px;
    }
  }
`
