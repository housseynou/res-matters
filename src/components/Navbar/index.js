import React from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../images/logoRM.png';
import { Nav, NavbarContainer, NavLogo, Burger, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'><img src={logo} alt="" width="80px" height="70px" /></NavLogo>
                  <Burger onClick={toggle}>
                      <FaBars />
                  </Burger>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='themes'>Thèmes</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='plateformes'>Plateformes</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='publications'>Publications</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='lequipe'>L'équipe</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='involved'>Get Involved</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
