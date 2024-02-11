import React from 'react';
import { Nav, NavItem, NavLogo, NavMenu, NavWrapper } from './NavbarStyles';

const Navbar = () => {
  return (
    <Nav>
      <NavWrapper>
        <NavLogo />
        <NavMenu>
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Facilities</NavItem>
          <NavItem>Announcements</NavItem>
        </NavMenu>
        <NavMenu mLeft='10px'>
          <NavItem>Academics</NavItem>
          <NavItem>Testimonials</NavItem>
          <NavItem>Gallery</NavItem>
          <NavItem>Contact Us</NavItem>
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
