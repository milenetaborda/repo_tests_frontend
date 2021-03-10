import styled from 'styled-components'

export const PaymentContainer = styled.div`
  padding: 10px;

  h1 {
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-transform: uppercase;

    margin: 20px 0 5px 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 12px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

    label {
      color: #ccc;
      font-size: 12px;
      font-weight: 700;
    }

    > div {
      background-color: #fff;
      display: grid;
      grid-column: 1fr 1fr;
      grid-column-gap: 20px;

      label {
        color: #ccc;
        font-size: 12px;
        font-weight: 700;
        grid-row-start: 1;
        padding-top: 25px;
      }
    }

    input {
      width: 100%;
      height: 45px;
      border-radius: 3px;
      border: 1px solid ${(props) => (props.isError ? 'red' : '#E7E7E7')};
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      background-color: #fff;
      padding: 12px;
      font-size: 16px;
      color: #212121;

      ::placeholder {
        color: #e0e7ee;
      }
      :focus {
        border-color: #a43287;
      }
      :first-of-type {
        margin-bottom: 25px;
      }
    }
  }
`
