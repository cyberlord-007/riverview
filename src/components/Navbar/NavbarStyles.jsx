import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';

export const Nav = styled.nav`
  width: 90%;
  height: 4.5rem;
  position: fixed;
  top: 25px;
  left: 5vw;
  right: 5vw;
  background: #a0bfe0;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const NavLogo = styled.div`
  width: 150px;
  height: 120px;
  position: absolute;
  top: -1px;
  margin-top: 10px;
  left: 45%;
  z-index: 2;
  background: url(${Logo}) no-repeat center;
  background-size: cover;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Merriweather', serif;
  margin-left: ${({ mLeft }) => mLeft || '0'};
`;

export const NavItem = styled.p`
  color: #4a55a2;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.2rem;
  height: 100%;
  cursor: pointer;
`;
