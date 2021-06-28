import React from 'react';
import {ContainerWrapper} from "../HeroSection/Hero.elements";
import vallee from "../../images/captures/vallée.PNG";
import cci from "../../images/captures/cci.PNG";
import sarclay from "../../images/captures/sarclay.png";
import loire from "../../images/captures/loire.png";
import hub from "../../images/captures/hub.PNG";
import handissup from "../../images/captures/handissup.PNG"
import talents from "../../images/captures/th.PNG"
import {Paragraphe, Title2, VoirIcon} from "../globalStyles";
import {Img} from "../InfoSection/Info.elements";
import {Real, RealWrapper} from "./Real.elements";
import Fade from "react-reveal/Fade";

const RealSection = () => {
    return (
        <>
            <ContainerWrapper id="realisations">
                <Fade bottom>
                    <Title2 center>
                        Parmi nos réalisations
                    </Title2>
                </Fade>
                <RealWrapper>
                    <Real>
                        <Img src={sarclay}/>
                        <Paragraphe center>Le forum de l’apprentissage de l’apprentissage de l’Université Paris-Saclay</Paragraphe>
                        <a href="https://www.forum-apprentissage-universite-paris-saclay.fr/" target="_blank" rel="noreferrer"><VoirIcon vert />Voir</a>
                    </Real>
                    <Real>
                        <Img src={cci}/>
                        <Paragraphe center>Le forum de l’alternance de la CCI de Paris Il-de-France</Paragraphe>
                        <a href="https://www.forum-alternance-enligne.fr/" target="_blank" rel="noreferrer"><VoirIcon vert />Voir</a>
                    </Real>
                    <Real>
                        <Img src={handissup}/>
                        <Paragraphe center>Le forum régional emploi handicap Handisup Auvergne-Rhône-Alpes</Paragraphe>
                        <a href="https://www.forumemploihandisup.org/" target="_blank" rel="noreferrer"><VoirIcon vert />Voir</a>
                    </Real>
                    <Real>
                        <Img src={vallee}/>
                        <Paragraphe center>Les rencontres de l’alternance de Vallée Sud Grand Paris Emploi</Paragraphe>
                        <a href="https://www.rencontres-alternance-valleesud-emploi.fr/" target="_blank" rel="noreferrer"><VoirIcon vert />Voir</a>
                    </Real>
                    <Real>
                        <Img src={loire}/>
                        <Paragraphe center>Les e-rencontres de la mobilité en Pays de la Loire</Paragraphe>
                        <a href="https://salonemploi-paysdelaloire.fonction-publique.gouv.fr/" target="_blank" rel="noreferrer"><VoirIcon vert />Voir</a>
                    </Real>
                    <Real>
                        <Img src={hub}/>
                        <Paragraphe center>Le hub de l’alternance</Paragraphe>
                        <a href="https://www.hub-alternance.fr/" target="_blank" rel="noreferrer"><VoirIcon vert />Voir</a>
                    </Real>
                    <Real>
                        <Img src={talents}/>
                        <Paragraphe center>Notre forum en ligne Talents Handicap :</Paragraphe>
                        <a href="https://www.talents-handicap.com/" target="_blank" rel="noreferrer"><VoirIcon vert />Voir</a>
                    </Real>
                </RealWrapper>
            </ContainerWrapper>
        </>
    );
}

export default RealSection;