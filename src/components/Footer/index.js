import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    NewNet3d,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from "./Footer.elements";
import {animateScroll as scroll} from "react-scroll";
import Logo from "../../images/forum.png";
import NewNet from "../../images/newnet.png";
import {LogoContainer} from "../Navbar/Navbar.elements";
import {Bleu, Vert} from "../globalStyles";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return(
        <FooterContainer>
            <FooterWrap>
              <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <LogoContainer petit src={Logo} />
                        </SocialLogo>
                        <WebsiteRights>Talents Handicap © {new Date().getFullYear()} Tous droits réservés</WebsiteRights>
                        <NewNet3d>
                            <Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en ligne</Bleu> ® est un service de <LogoContainer petit src={NewNet} />
                        </NewNet3d>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;