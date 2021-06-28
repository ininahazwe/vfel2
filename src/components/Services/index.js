import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import {ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from "./Services.elements";
import {Subtitle} from "../InfoSection/Info.elements";
import {Paragraphe, Title2} from "../globalStyles";
import {ContainerWrapper} from "../HeroSection/Hero.elements";

const Services = () => {
    return(
        <ContainerWrapper id="services">
            <Title2 center>Mettre l'accent sur le tout compris et sur l'équipe d'experts</Title2>
            <Subtitle darkText>Des services compris pour la réussite de votre événement digital</Subtitle>
            <Paragraphe>Notre offre clé en main intègre également :</Paragraphe>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>La formation des exposants</ServicesH2>
                    <ServicesP>formation au fonctionnement de la plateforme pour une prise en main rapide et une participation efficace</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Support technique</ServicesH2>
                    <ServicesP>Le support technique aux visiteurs et aux exposants</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ContainerWrapper>
    )
}

export default Services;