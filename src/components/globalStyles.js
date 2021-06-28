import styled, { createGlobalStyle } from 'styled-components';
import {FaTimes} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/all";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
    color: #666;
 } 
`;

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  
  @media screen and (max-width: 991px) {
    padding-right: 50px;
    padding-left: 50px;
  }
`;

export const Paragraphe = styled.p`
  color: #666;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  padding-bottom: 10px;
`;

export const Bleu = styled.span`
  color: #104778;
`;

export const Vert = styled.span`
  color: #92c03e;
`;

export const Vide = styled.div`
  height: 30px;
`;

export const Liste = styled.ul`
    padding: 20px;
`;

export const ListeLi = styled.li`
    list-style: square;
    color: #2e3440;
`;

export const Title = styled.h1`
  color: #252525;
  font-size: 2.5rem;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  position: relative;

  :before{
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    //background: linear-gradient(180deg, rgba(6,204,167,0.60) 0%, rgba(73,151,209,0.60) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: -1;
  }

  @media screen and (max-width: 768px){
    font-size: 1.5rem;
    
    :before{
      width: 50px;
      height: 50px;
    }
  }
`;

export const Title2 = styled.h2`
  color: #252525;
  font-size: 30px;
  line-height: 30px;
  font-weight: bold;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  position: relative;
  //background: ${({ right }) => (right ? 'linear-gradient(190deg,#ebf4fd,hsla(0,0%,100%,0) 45%)' : 'linear-gradient(165deg,#ebf4fd,hsla(0,0%,100%,0) 45%)')};
  padding: 100px 60px 20px 60px;
  border-radius: 15px;
  animation-duration: 5s;

  @media screen and (max-width: 768px){
    padding: 30px;
  }
  @keyframes background {
    from {
      transform: rotateX(0);
    }
    to {
      transform: rotateX(180);
    }
  }
`;

export const IconIllustr = styled.img`
  width: 50px;
  display: block;
  margin: 50px auto 0;
  color: #a7cc62;
`;

export const H4 = styled.h4`
  padding: 20px 0;
  color: #696969;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const H3 = styled.h3`
  padding: 20px 0;
  color: #696969;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const H2 = styled.h2`
  padding: 20px 0;
  color: #696969;
`;

export const BigCloseIcon = styled(FaTimes)`
  position: fixed;
  top: 5% ;
  right: 2%;
  z-index: 10;
  width: 60px;
  color: #4997d1;
  border-left: 1px solid whitesmoke;
  height: 250px;
  padding: 10px;
  animation: slide-out 2s forwards;
  
  @keyframes slide-out {
    0% { top: -15%; }
    100% { top: 1%; }
  }

  @media screen and (max-width: 768px){
    border: none;
    top: 1%;
    left: 0;
    height: auto;
  }
`;

export const VoirIcon = styled(AiOutlineEye)`
  fill: ${({vert}) => (vert ? '#92C03E' : '#ffffff')};
  font-size: 1.5rem;
  margin-right: 10px;
`;

export default GlobalStyle;