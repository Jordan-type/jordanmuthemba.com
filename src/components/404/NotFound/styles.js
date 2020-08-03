import styled from 'styled-components'
import { textAlign, padding } from 'styled-system'
import overlaynotfound from 'assets/illustrations/not-found.svg';

export const Center = styled.div`
  ${textAlign}
  ${padding}
`

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlaynotfound});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
`;
