import React from 'react';
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavLinks,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap">Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team">Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="tech">Tech specs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="utilities">Utilities</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="faqs">Faqs</NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/connect'>Connect</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>


            </Nav>

        </>
    )
}

export default Navbar;