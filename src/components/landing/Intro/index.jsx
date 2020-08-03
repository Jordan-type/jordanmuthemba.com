import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container } from '../../../components/common'
import dev from '../../../assets/illustrations/mobile-dev.svg'
import { MagicalButton, Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import {Header} from '../../theme/Header';

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h4>Hello! I’m Jordan Muthemba</h4>
				<p>Also Known as Jordan Type, I’m a self-taught Full Stack JavaScript and Blockchain Developer.</p>
				<flex>
				   <MagicalButton as={AnchorLink} href="#contact">
					    My Resume
					 </MagicalButton>
					  <MagicalButton as={AnchorLink} href="#contact">
						    Contact me
						</MagicalButton>
				</flex>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Jordan Muthemba Web Developer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
