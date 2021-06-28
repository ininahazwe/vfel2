import React from 'react';
import {ContainerWrapper} from "../HeroSection/Hero.elements";
import {Paragraphe} from "../globalStyles";
import {PackBox, PackCheck, PackIcon, PackWrapper} from "./Pack.elements";
import {CheckIcon} from "../WhySection/Why.elements";
import info from "../../images/info-icon.svg"

const PackSection = () => {
    return (
        <>
            <ContainerWrapper>
                <PackWrapper>
                    <PackBox>
                        <PackIcon src={info}/>
                        <b>Un Pack Communication, en option</b>
                    </PackBox>
                    <Paragraphe>En cas de besoin, avec ce pack optionnel, nous pouvons vous conseiller et vous accompagner dans la communication pour vous aider dans la promotion et l’animation de votre événement</Paragraphe>
                    <PackCheck>
                        <CheckIcon />Choix et adaptation des visuels utilisés sur la plateforme
                        <CheckIcon />Création de visuels, bannières, vignettes…
                        <CheckIcon />Création d’un kit de communication complet pour vos exposants, pour les aider à communiquer sur leur participation. Ce kit peut comporter : une plaquette de présentation de l’événement, des bannières, des visuels et des modèles de posts pour les réseaux sociaux, des modèles de mails pour leurs communications interne et externe
                        <CheckIcon />La gestion d’emailings pendant l’événement à destinations des inscrits (visiteurs et exposants) : informer de l’ouverture, informer du programme de conférences, informer des actualités de l’événements…
                        <CheckIcon />Gestion des enquêtes de satisfaction visiteurs et exposants
                    </PackCheck>
                </PackWrapper>
            </ContainerWrapper>
        </>
    );
}

export default PackSection;