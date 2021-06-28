import React from 'react';
import {ContainerWrapper} from "../HeroSection/Hero.elements";
import {
    Option,
    OptionDescription,
    OptionIcon,
    OptionsWrapper,
    OptionTete
} from "../SolutionSection/Solution.elements";
import {Bleu, H4, Liste, ListeLi, Title2, Vert, Vide} from "../globalStyles";
import Icon1 from '../../images/expert-icon.svg';
import Icon2 from '../../images/target-icon.svg';
import Icon3 from '../../images/digital-icon.svg';
import {Subtitle} from "../InfoSection/Info.elements";
import Fade from "react-reveal/Fade";

const PointsFortsSection = () => {
    return (
        <>
            <ContainerWrapper id="pointsforts">
                <Fade bottom>
                    <Title2 center right>
                        Les points forts de <Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en ligne</Bleu> ®
                    </Title2>
                </Fade>
                <Subtitle darkText center>Une expérience de plus de 10 ans dans les événements en ligne et une organisation basée sur la pleine satisfaction du client nous permettent d’être votre meilleur partenaire pour réussir l’organisation sur-mesure de votre forum en ligne ou de votre salon virtuel</Subtitle>
                <Vide />
                <OptionsWrapper>
                    <Option high>
                        <OptionTete>
                            <OptionIcon src={Icon1}/>
                            <H4 center>Notre double expertise d’opérateur et d’organisateur.</H4>
                        </OptionTete>
                        <Vide />
                        <OptionDescription>
                            Depuis 10 ans, nous sommes à la fois :
                            <Liste>
                                <ListeLi>Opérateur de plateformes de forums en ligne et de salons virtuels professionnels</ListeLi>
                                <li>Organisateur de nos propres événements en ligne (Forum Talents Handicap, Salon en ligne HandiHA…)</li>
                            </Liste>
                            <p>En étant à la fois opérateur et organisateur, nous savons exactement ce qu’attendent les organisateurs, les exposants et les visiteurs, ce qui nous permet de vous garantir la mise à disposition d’une plateforme qui vous apporte réellement les fonctionnalités adaptées ainsi que les services d’une équipe support performante, pour un événement maîtrisé et réussi.</p>
                        </OptionDescription>
                    </Option>
                    <Option high>
                        <OptionTete blue>
                            <OptionIcon src={Icon2}/>
                            <H4 center>Notre spécialisation autour de l’emploi et du handicap</H4>
                        </OptionTete>
                        <Vide />
                        <OptionDescription>
                            <p>Notre cœur de métier s’articule autour des forums emploi, notamment à destination des publics en situation de handicap.</p>
                            <p>Cette expérience nous a conduit à développer une solution qui offre une ergonomie et des fonctionnalités particulièrement adaptées à de nombreux domaines d’activités : emploi, handicap, diversité, métiers, orientation, mobilité interne, rencontres professionnelles…</p>
                        </OptionDescription>
                    </Option>
                    <Option high>
                        <OptionTete>
                            <OptionIcon src={Icon3}/>
                            <H4 center>Notre capacité à utiliser les atouts du digital au service de votre événement physique</H4>
                        </OptionTete>
                        <Vide />
                        <OptionDescription>
                            <p>Pionniers et experts des événements digitaux, nous savons également comment vous permettre d’intégrer à votre événement physique une dimension digitale pour augmenter la portée de votre événement. Vous profitez ainsi de la synergie des atouts des deux formats, que ce soit durant les phases de pré-ouverture, de déroulement ou de suivi.</p>
                        </OptionDescription>
                    </Option>
                </OptionsWrapper>
            </ContainerWrapper>
        </>
    );
}

export default PointsFortsSection;