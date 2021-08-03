import styled from 'styled-components';
import {FaPen} from "react-icons/all";

export const HeroContainer = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 750px;
  position: relative;
  //z-index: 1;
  
  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //z-index: 2;
  }

  @media screen and (max-width: 768px){
    padding: 50px 50px 0 50px;
    height: 900px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const ContainerWrapper = styled.div`
  background: ${({ background }) => (background ? 'radial-gradient(circle, rgba(241,241,241,1) 0%, rgba(255,255,255,1) 100%)' : 'none')};
  padding: ${({Nopadding}) => (Nopadding ? 'none' : '80px 160px')};
  
  @media screen and (max-width: 768px){
    padding: ${({Nopadding}) => (Nopadding ? 'none' : '40px 30px')};
  }
  @media screen and (min-width: 960px){  
    padding: 40px 80px;
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: ${({padding}) => (padding ? '0 250px' : 'none')};

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: ${({padding}) => (padding ? '0' : 'none')};
    min-height: 360px;
    justify-content: space-around;
  }
`;

export const Illustration = styled.div`
  
`;
export const Description = styled.div`
  z-index: 1;
  text-align: ${({right}) => (right ? 'right' : 'left')};
`;

export const Presentation = styled.div`
  
`;

export const ImgHero = styled.img`
  width: 80%;
  display: block;
  margin: auto;
`;

export const PenIcon = styled(FaPen)`
  fill: white;
  font-size: 1rem;
  margin-right: 10px;
`;