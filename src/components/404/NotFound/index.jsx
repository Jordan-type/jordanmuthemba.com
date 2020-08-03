import React from 'react'
import { Link } from 'gatsby'
import { SmallerContainer } from 'components/common'
import { Wrapper, Center } from './styles'

export default () => (
  <Wrapper>
  <Center textAlign="center" pt={6} pb={6} as={SmallerContainer}>
    <h1>Whoops, page not found!</h1>
    <Link to="/">Go Back Home</Link>
  </Center>
  </Wrapper>
)
