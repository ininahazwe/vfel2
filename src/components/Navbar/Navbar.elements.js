import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {AiOutlineMail} from "react-icons/all";

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
    //box-shadow: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 0.125) 0 0 10px' : 'none')};
    //box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.1);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({scrollNav}) => (scrollNav ? '0.8em' : '0.75rem')};
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.2s ease-in-out ;

  @media screen and (max-width: 960px){
        transition: 0.8s all ease; 
    }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  border-bottom: ${({scrollNav}) => (scrollNav ? 'none' : '1px solid whitesmoke')};
  
  @media screen and (max-width: 768px){
    padding: 0 5px;
  }
  @media screen and (max-width: 768px){
    padding: 20px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    
    @media screen and (max-width: 768px){
      display: none;
    }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const MailIcon = styled(AiOutlineMail)`
  fill: white;
  font-size: 1rem;
  margin-right: 10px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  
      &.active {
      border-bottom: 3px solid #4997d1;
      }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtn2 = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.img`
  width: ${({petit}) => (petit ? '80px' : '160px')};
  
  @media screen and (max-width: 768px){
    width: 120px;
  }
`;

export const NavBtnLink = styled(LinkS)`
  background: #86d38e;
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 10px;
  padding: 6px 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(0.98);
    box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.1);
  }
  
  a{
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

