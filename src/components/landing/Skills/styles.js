import styled from 'styled-components';

export const MagicalButton = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #00c3ff;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
  transition: 0.5s;

  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
    transition: 0.5s;
  }

  &:first-child {
    margin-right: 1rem;
    background: #f9f9f9;
    color: #00c3ff;
    box-shadow: rgb(185, 185, 185) 0px 13px 19px -6px;

    &:hover {
      box-shadow: 0px 0px 17px 0px rgba(185, 185, 185, 0.4);
    }

    @media (max-width: 380px) {
      margin: 0 auto 1.5rem auto;
    }
  }
`
export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  color: #212121;
  padding: 8rem 1rem 7rem 1rem;
  clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
  background: #f9f9f9;
  text-align: center;

  ${({ theme }) =>
    theme === 'dark' &&
    `
		color: #fff;
		background: #2b2a2a;
	`}
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 0;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`

export const Tech = styled.div`
  text-align: center;

  a {
    color: #212121;
    text-decoration: underline;

    ${({ theme }) =>
      theme === 'dark' &&
      `
			color: #fff;
		`}
  }
`
