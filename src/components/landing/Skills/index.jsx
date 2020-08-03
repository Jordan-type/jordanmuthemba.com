import React, { useContext } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Container } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import Skill from './Skill'
import { Wrapper, Tech, Flex } from './styles'

export const Skills = () => {
  const { theme } = useContext(ThemeContext)
  const {
    skills: { edges },
  } = useStaticQuery(graphql`
    query {
      skills: allSkillsYaml {
        edges {
          node {
            id
            title
            icon
          }
        }
      }
    }
  `)
  return (
    <Wrapper theme={theme}>
      <Container>
        <h2>Skills</h2>
        <Flex>
          {edges.map(({ node }) => (
            <Skill key={node.id} {...node} />
          ))}
        </Flex>
        <Tech theme={theme}>
          <Link to="/the-tech-tools-I-use">See the tech tools I use?</Link>
        </Tech>
      </Container>
    </Wrapper>
  )
}










// import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { Container } from 'components/common'
// import dev from 'assets/illustrations/skills.svg'
// import { MagicalButton, Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'
//
// export const Skills = () => ( <Wrapper id = "about" >
//     <SkillsWrapper as = { Container } >
//     <Thumbnail >
//     <img src = { dev } alt = "I’m Jordan and I’m a Blockchain Developer!"/>
//     </Thumbnail>
//     <Details >
//     <h1 > About Me </h1> <p>
//     I 'm 26 years old Software Developer from Nairobi, Kenya. My skills and interest is in
//     Blockchain and Web development </p> <p>
//     Specializing in different programming languages and frameworks -
//     Javascript(ES6 + ), Python, Solidity, Node.JS, React(Native), SQL, Postgrel & PHP. </p>
//     <MagicalButton as = { AnchorLink }
//     href = "#contact" >Contact me
//     </MagicalButton>
//     </Details>
//     </SkillsWrapper>
//     </Wrapper>
// );
