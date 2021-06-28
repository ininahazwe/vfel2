import React from 'react';
import Logo from "../../images/svg-2.svg";
import {
    ContainerWrapper,
    Description,
    HeroWrapper,
    Illustration,
    Presentation
} from "../HeroSection/Hero.elements";
import {Img, Subtitle} from "../InfoSection/Info.elements";
import {Liste, ListeLi, Paragraphe} from "../globalStyles";

const AproposSection = () => {
    return (
        <>
            <ContainerWrapper id="apropos">
                <HeroWrapper>
                    <Description>
                        <Subtitle>« Votre forum en ligne » est une solution performante et complète, conçue et développée par NEW NET 3D (Groupe Talents Handicap), qui intègre :</Subtitle>
                        <Presentation>
                            Notre double expertise, depuis plus de 10 ans, à la fois comme :
                            <Liste>
                                <ListeLi>Une plateforme accessible aux normes handicap, et responsive pour une utilisation sur ordinateur, tablette et mobile</ListeLi>
                                <ListeLi>La mise à disposition de la plateforme exclusivement pour votre événement, sur un nom de domaine dédié (site Internet dédié, au nom de votre événement)</ListeLi>
                                <ListeLi>La personnalisation de la plateforme pour votre événement</ListeLi>
                            </Liste>
                            <Paragraphe>nous permet d’être votre meilleur partenaire pour réussir l’organisation sur mesure de votre forum en ligne ou de votre salon virtuel, dans de nombreux domaines d’activités (emploi, handicap, diversité, écoles, métiers, orientation, mobilité interne, rencontres professionnelles,…).</Paragraphe>
                        </Presentation>
                    </Description>
                    <Illustration>
                        <Img src={Logo} />
                    </Illustration>
                </HeroWrapper>
            </ContainerWrapper>
        </>
    );
}

export default AproposSection;