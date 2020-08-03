import React from 'react'
import { graphql } from 'gatsby'
import { Container, Subtitle } from 'components/common'
import FreelanceProjects from './FreelanceProjects'

export const imageFields = graphql`
  fragment imageFields on ImageSharp {
    fluid(maxWidth: 960) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
`

export const Work = () => (
  <Container>
    <Subtitle>Featured Work</Subtitle>
    <FreelanceProjects />
  </Container>
)
