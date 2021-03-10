import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: #ccc;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 24px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  background-color: #fff;

  div {
    margin: 0;

    :nth-of-type(${(props) => props.page}) {
      color: #ff7800;
    }
  }
`
