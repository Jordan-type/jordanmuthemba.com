import React from 'react'
import { Project, DribbbleIcon } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { shots } = useStaticQuery(graphql`
    query {
      shots: allDribbbleYaml {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                fluid(maxWidth: 630) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            link
            description
          }
        }
      }
    }
  `)
  return (
    <Project
      icon={DribbbleIcon}
      title="Hackathons I've Participated"
      projects={shots}
      link="http://blog.thelightideas.co.ke/"
      color="#ea4c89"
    />
  )
}
