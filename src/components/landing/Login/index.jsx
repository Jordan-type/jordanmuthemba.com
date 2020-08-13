import React from 'react'
import {Container} from '../../../components/common'
import dev from '../../../assets/illustrations/mobile-dev.svg'
import {Wrapper, IntroWrapper, Details, Thumbnail} from './styles'
import {Header} from '../../theme/Header';
import {LoginForm} from './LoginForm';

export const Login = () => (
    <Wrapper>
        <Header/>
        <IntroWrapper as={Container}>
            <Details>
                <h1>Login</h1>
                <LoginForm/>
            </Details>
            <Thumbnail>
      				<img src={dev} alt="Jordan Muthemba Web Developer!" />
      			</Thumbnail>
        </IntroWrapper>
    </Wrapper>
);
