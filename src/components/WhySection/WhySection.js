import React from 'react';
import {ContainerWrapper, Description, HeroWrapper, Illustration} from "../HeroSection/Hero.elements";
import {Bleu, H3, Liste, ListeLi, Title2, Vert, Vide} from "../globalStyles";
import pk1 from "../../images/goals.svg";
import pk2 from "../../images/target.svg";
import {CheckIcon, ChoiceContainer, ImgFort} from "./Why.elements";
import {Subtitle} from "../InfoSection/Info.elements";
import Fade from "react-reveal/Fade";
import {PackCheck} from "../PackSection/Pack.elements";

const WhySection = () => {
    return (
        <>
            <ContainerWrapper id="nouschoisir">
                <Fade bottom>
                    <Title2 center right>
                        Pourquoi choisir « <Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en ligne</Bleu> ® » pour votre événement digital ?
                    </Title2>
                </Fade>
                <Subtitle>Avec notre double-expertise d’opérateur de plateforme et d’organisateur de salons et forums en ligne depuis plus de 10 ans, nous sommes votre meilleur partenaire pour organiser votre événement en ligne. </Subtitle>
                <Vide />
                <HeroWrapper padding partition>
                    <Description right>
                        <b>Nos priorités :</b><br/> vous apporter des solutions techniques fiables et bien adaptées à vos besoins et vous assurer un accompagnement constant et efficace,  avant, pendant et après votre événement.
                    </Description>
                    <Illustration>
                        <ImgFort src={pk1} />
                    </Illustration>
               </HeroWrapper>
                <HeroWrapper padding partition>
                    <Illustration>
                        <ImgFort src={pk2} />
                    </Illustration>
                    <Description>
                        Avec 100% de réussite pour 100% des événements organisés, nos clients partenaires sont très satisfaits de :
                        <Liste>
                            <ListeLi>La performance de nos solutions</ListeLi>
                            <ListeLi>La qualité de notre accompagnement</ListeLi>
                            <ListeLi>Notre capacité à nous adapter à vos besoins</ListeLi>
                        </Liste>
                    </Description>
                 </HeroWrapper>

                <ChoiceContainer>
                    <H3>Choisir « <Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en ligne</Bleu> ® » pour vous accompagner dans l’organisation de votre salon virtuel ou forum en ligne, c’est choisir des atouts pour la réussite de votre événement digital</H3>
                    <PackCheck>
                        <CheckIcon />L'engagement d’une équipe motivée et disponible
                        <CheckIcon />10 ans d’expertise et d’expérience
                        <CheckIcon />Le souci constant de la qualité
                        <CheckIcon />La responsabilité au service d’un objectif commun
                        <CheckIcon />Le respect des délais, des budgets, de la relation humaine
                        <CheckIcon />Le sens du service client
                        <CheckIcon />L'innovation au service des utilisateurs
                    </PackCheck>
                </ChoiceContainer>
            </ContainerWrapper>
        </>
    );
}

export default WhySection;