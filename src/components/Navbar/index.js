import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavLinks,
    NavMenu,
    LogoContainer, MailIcon, NavBtn, NavBtnLink,
} from './Navbar.elements';
import Logo from "../../images/forum.png"
import {Link} from "react-router-dom";

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color:'#4997d1'}}>
                <Nav scrollNav={scrollNav}>
                        <NavbarContainer>
                            <NavLogo to='/' onClick={toggleHome}>
                                <LogoContainer src={Logo} />
                            </NavLogo>
                            <MobileIcon onClick={toggle}>
                                <FaBars />
                            </MobileIcon>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to='offres'
                                              smooth={true} duration={500} spy={true} exact='true' offset={0}
                                    >Notre solution</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='pointsforts'
                                              smooth={true} duration={500} spy={true} exact='true' offset={0}
                                    >Points forts</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='nouschoisir'
                                              smooth={true} duration={500} spy={true} exact='true' offset={0}
                                    >Pourquoi nous choisir</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to='realisations'
                                              smooth={true} duration={500} spy={true} exact='true' offset={0}
                                    >Nos réalisations</NavLinks>
                                </NavItem>
                            </NavMenu>
                            <NavBtn>
                                <NavBtnLink>
                                    <Link to="/contact"><MailIcon /> Contact</Link>
                                </NavBtnLink>
                            </NavBtn>
                        </NavbarContainer>
                    </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
