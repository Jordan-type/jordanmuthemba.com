import React from 'react'
import { BehanceIcon, Project } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allBehanceYaml {
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
      icon={BehanceIcon}
      title="Articles on Blog.thelightideas"
      projects={projects}
      link="http://blog.thelightideas.co.ke/"
      color="rgb(0, 119, 255)"
    />
  )
}
