import styled from 'styled-components'

export const SubTotalContainer = styled.div`
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 20px 0;
  text-transform: uppercase;
  background: transparent;

  > div {
    display: flex;
    justify-content: space-between;
    margin: 0.75rem;
  }

  div:nth-of-type(3) {
    color: #ff7800;
  }
  div:nth-of-type(4) {
    padding-top: 8px;
    font-weight: bold;
  }
`
