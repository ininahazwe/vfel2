import React from 'react';
import {
    BigCloseIcon,
    Bleu,
    PageContainer, PageWrapper,
    Paragraphe,
    Title2,
    Vert,
    Vide
} from "../components/globalStyles";
import {SolutionBox} from "../components/SolutionSection/Solution.elements";
import {Link} from "react-router-dom";
import {Subtitle} from "../components/InfoSection/Info.elements";
import Slide from "react-reveal/Slide";
import {ImgFort2} from "../components/WhySection/Why.elements";
import illustration1 from "../images/platform.svg"
import PackSection from "../components/PackSection/PackSection";

const OptionsPage = () => {

    return (
        <>
            <Link to='/#offres'>
                <BigCloseIcon/>
            </Link>
            <Vide />
            <Slide bottom>
                <Title2 center> Une solution technique performante et une équipe d’experts à votre service</Title2>
                <PageContainer>
                    <PageWrapper>
                        <SolutionBox>
                            <h2>Une solution technique performante et riche en fonctionnalités</h2>
                            <Subtitle darkText>La plateforme « <Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en
                                ligne</Bleu> ® », entièrement conçue et développée par nos équipes internes, est pensée
                                pour vous apporter toutes les fonctionnalités dont vous avez besoin pour la préparation
                                et le déroulement de votre événement.</Subtitle>
                            <Vide/>
                            <h3>Une plateforme très accessible et hautement personnalisable:</h3>
                            <ul>
                                <li>Une plateforme, accessible aux normes handicap, et responsive pour une utilisation
                                    sur ordinateur, tablette et mobile
                                </li>
                                <li>La mise à disposition de la plateforme exclusivement pour votre événement, sur un
                                    nom de domaine dédié (site Internet dédié, au nom de votre événement)
                                </li>
                                <li>La personnalisation de la plateforme pour votre événement (couleurs, visuels,
                                    menus…)
                                </li>
                                <li>La création des stands virtuels 3D personnalisables pour vos exposants à l’ergonomie
                                    conçue pour une utilisation facile par les visiteurs
                                </li>
                                <li>La création de villages pour une répartition thématique des stands</li>
                                <li>La création des comptes exposants (nombre illimité)</li>
                            </ul>
                            <Vide/>
                            <ImgFort2 src={illustration1}/>
                            <h3>Pour vos exposants :</h3>
                            <ul>
                                <li>La gestion des rendez-vous entre visiteurs et exposants par visio, téléphone ou
                                    chat
                                </li>
                                <li>La synchronisation des rendez-vous avec les agendas</li>
                                <li>La gestion des rappels email (liste des rendez-vous de la journée + rappel 30
                                    minutes avant chaque rendez-vous)
                                </li>
                                <li>L’organisation de speedmeetings pour des mises en relation simples et rapides entre
                                    visiteurs, exposants, experts…
                                </li>
                            </ul>
                            <Vide/>

                            <h3>Pour vos visiteurs :</h3>
                            <ul>
                                <li>L'inscription et la participation des visiteurs (avec possibilité de modérer les
                                    inscriptions)
                                </li>
                                <li>La disponibilité d’une fonction speedmeetings pour des mises en relation simples et
                                    rapides entre visiteurs, exposants, experts…
                                </li>
                                <li>La possibilité de participer aux rendez-vous entre visiteurs et exposants par visio,
                                    téléphone ou chat
                                </li>
                            </ul>
                            <Vide/>

                            <h3>Pour votre programme d’animations : </h3>
                            <ul>
                                <li>La gestion simple du programme d’animations de votre événement (conférences,
                                    brainstorming, tables rondes, consultations…)
                                </li>
                                <li>La gestion des formulaires d’inscriptions aux animations et un dispositif de mails
                                    automatiques pour interagir avec les inscrits (confirmations, liens d’accès à
                                    l’animation, rappels…)
                                </li>
                                <li>La mise en avant des animations imminentes assurant une bonne dynamique à votre
                                    événement
                                </li>
                                <li>L'organisation de la WebTV de votre événement</li>
                                <li>La gestion des actualités de votre événement</li>
                            </ul>
                            <Vide/>

                            <h3>Un module « emploi » spécifique comprenant des fonctionnalités adaptées</h3>
                            <Paragraphe>Pour les événements dédiés à l’emploi, la formation ou la mobilité
                                professionnelle, « Votre Forum En ligne ® » vous propose des fonctionnalités
                                spécialement adaptées : </Paragraphe>
                            <b>Gestion des offres :</b>
                            <ul>
                                <li>La gestion des offres d’emploi (CDI, CDD, Alternance, Stage, Intérim)</li>
                                <li>La gestion des offres de formation</li>
                                <li>La collecte automatique des offres via la multidiffusion</li>
                                <li>La gestion des questionnaires de présélection à associer aux offres, pour faciliter
                                    la présélection des candidatures
                                </li>
                                <li>La gestion des actualités de votre événement</li>
                            </ul>
                            <Vide/>

                            <b>Gestion des candidats et des candidatures :</b>
                            <ul>
                                <li>L'inscription des candidats avec dépôt de CV</li>
                                <li>La gestion de la CVthèque de votre événement</li>
                                <li>Le matching des candidats avec les offres</li>
                                <li>La gestion des candidatures reçues</li>
                                <li>Le suivi et la gestion facilitée des réponses aux candidats</li>
                                <li>L'organisation facilitée des entretiens avec les candidats retenus par visio,
                                    téléphone ou chat
                                </li>
                            </ul>
                            <Vide/>
                        </SolutionBox>
                        <SolutionBox>
                            <h2>Une équipe d’experts à votre service</h2>
                            <Vide/>
                            <Subtitle darkText>Pour garantir la réussite de votre événement digital, « Votre Forum En
                                ligne ® » fait de l’accompagnement humain une priorité.</Subtitle>
                            <Vide/>
                            <h3>Notre offre clé en main intègre systématiquement un support exposants et candidats
                                impliqué et efficace : </h3>
                            <ul>
                                <li><b>Un.e chef.fe de projet dédié</b> pour coordonner avec vous, en mode projet,
                                    toutes les étapes de votre événement : conception, mise en place, préparation,
                                    déroulement, support et bilan
                                </li>
                                <li><b>Formation des organisateurs :</b> plusieurs sessions de formation au
                                    fonctionnement de la plateforme sont mises en place pour une parfaite compréhension
                                    et prise en main
                                </li>
                                <li><b>Formation des exposants :</b> formation au fonctionnement de la plateforme pour
                                    une prise en main rapide et une participation efficace
                                </li>
                                <li><b>Support des exposants et candidats :</b> durant tout votre événement, y compris
                                    durant la phase de préparation pour vos exposants, une équipe dédiée est joignable
                                    pour assurer la réponse aux questions et la résolution rapide des éventuels
                                    problèmes.
                                </li>
                            </ul>
                            <Vide/>
                            <h3>Une équipe pluridisciplinaire à votre disposition : </h3>
                            <p>Nous disposons d’une équipe de spécialistes dans chaque domaine clé, qui peuvent
                                intervenir à vos côtés : </p>
                            <ul>
                                <li>RH, événementiel B2B et B2C, marketing et communication, technologie</li>
                            </ul>
                        </SolutionBox>
                    </PageWrapper>
                    <PackSection/>
                </PageContainer>
            </Slide>
        </>
    );
};

export default OptionsPage;