import styled from 'styled-components'
import { flexbox, layout } from 'styled-system'

export const Wrapper = styled.div`
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const Flex = styled.div`
  ${layout}
  ${flexbox}

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Portrait = styled.div`
  ${layout}
  text-align: center;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`
