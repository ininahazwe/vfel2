import React from 'react';
import { GiCrystalBars } from 'react-icons/gi';
import { GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';
import {Title} from "../globalStyles";
import {Subtitle} from "../InfoSection/Info.elements";


function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <Title>Des services compris pour la réussite de votre événement digital</Title>
          <Subtitle>Notre offre clé en main intègre également :</Subtitle>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Formation des exposants</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Une formation au fonctionnement de la plateforme pour une prise en main rapide et une participation efficace</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Support technique</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Le support technique aux visiteurs et aux exposants</PricingCardFeature>
                 </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
