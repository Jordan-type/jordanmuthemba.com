import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link} from 'gatsby'
import {Wrapper} from './styles'
import {getUser} from "../../../../services/auth";

const NavbarLinks = ({desktop}) => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

    return (
        <Wrapper desktop={desktop}>
            {pathname === '/login' ||  pathname === '/profile' ?
                <>
                    <Link to={'/'} replace>Home</Link>
                    <Link to="/about"  activeClassName="current">About</Link>
                    <Link to="/#projects" replace>Projects</Link>
                    <Link to="/#contact" replace>Contact</Link>
                </>
                :
                <>
                    <Link to={'/'} replace>Home</Link>
                    <Link to="/about"  activeClassName="current">About</Link>
                    <AnchorLink href="#projects">Projects</AnchorLink>
                    <AnchorLink href="#contact">Contact</AnchorLink>
                </>
            }
            {getUser().username ?
                <>
                    <Link to="/profile" replace>Profile</Link>
                </>
                : null
            }
        </Wrapper>
    );
}

export default NavbarLinks
