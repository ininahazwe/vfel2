import React from 'react';
import {
    HeroContainer,
    HeroWrapper, Illustration, Description, ImgHero, PenIcon
} from "./Hero.elements";
import {Bleu, Title, Vert, Vide} from "../globalStyles";
import {NavBtn2, NavBtnLink} from "../Navbar/Navbar.elements";
import {Link} from "react-router-dom";
import {ButtonContainer} from "../SolutionSection/Solution.elements";
import hero from "../../images/amico-hero.svg";

const HeroSection = () => {
    return (
         <HeroContainer>
            <HeroWrapper padding>
                <Illustration>
                    <ImgHero src={hero} />
                </Illustration>
                <Description>
                    <Title><Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en ligne ®</Bleu></Title>
                    <h3>La solution simple et clés en main qui vous offre tous les atouts pour la réussite de votre forum en ligne ou votre salon virtuel.</h3>
                    <p>Depuis plus de 10 ans, nous sommes opérateurs de plateformes en ligne et organisateurs d’événements virtuels.</p>
                    <p>Avec « <Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en ligne</Bleu> ® », nous mettons à votre disposition une solution technique simple, accessible et éprouvée, doublée d’un accompagnement sur-mesure, pour une mise en place rapide et fiable de vos forums et salons en ligne.</p>
                    <Vide />
                    <ButtonContainer>
                        <NavBtn2>
                            <NavBtnLink>
                                <Link to="/contact"><PenIcon /> Demander une présentation</Link>
                            </NavBtnLink>
                        </NavBtn2>
                    </ButtonContainer>
                </Description>
            </HeroWrapper>
        </HeroContainer>
    );
};

export default HeroSection;