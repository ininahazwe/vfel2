import React from 'react';
import {ContainerWrapper} from "../HeroSection/Hero.elements";
import {Title2, Vide, VoirIcon} from "../globalStyles";
import {ButtonContainer, SolutionWrapper} from "./Solution.elements";
import {CheckIcon} from "../WhySection/Why.elements";
import {PackCheck} from "../PackSection/Pack.elements";
import {Link} from "react-router-dom";
import {NavBtn2, NavBtnLink} from "../Navbar/Navbar.elements";

const SolutionSection = () => {

    return (
        <>
            <ContainerWrapper id="offres">
                <SolutionWrapper>
                    <Title2>
                        Une solution complète et personnalisée, dédiée à votre événement
                    </Title2>
                     <PackCheck>
                         <CheckIcon />Une solution technique performante et riche en fonctionnalités
                         <CheckIcon />Un accompagnement pour la préparation et le déroulement de votre événement
                         <CheckIcon />Un fonctionnement qui facilite la mise en relation ciblée entre vos exposants et vos visiteurs
                         <CheckIcon />Un système pour organiser efficacement le programme d'animations de votre événement
                         <CheckIcon />Une équipe d’experts à votre service, dont un.e chef.fe de projet dédié pour coordonner avec vous, en mode projet, toutes les étapes de votre événement : conception, mise en place, préparation, déroulement, support et bilan
                         <CheckIcon />Si besoin, des modules spécialement conçus pour des événements emploi, alternance, formation, mobilité...
                         <CheckIcon />Si besoin, un service de conseil en communication, pour vous aider dans la promotion et l’animation de votre événement
                         <Vide /><Vide /><Vide />
                         <ButtonContainer>
                             <NavBtn2>
                                 <NavBtnLink>
                                     <Link to="/options"><VoirIcon /> Voir plus</Link>
                                 </NavBtnLink>
                             </NavBtn2>
                         </ButtonContainer>
                     </PackCheck>
                </SolutionWrapper>
            </ContainerWrapper>
        </>
    );
}

export default SolutionSection;