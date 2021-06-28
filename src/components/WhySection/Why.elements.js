import styled from 'styled-components';
import {FaCheck} from "react-icons/all";

export const ImgFort = styled.img`
  width: 75%;
  display: block;
  margin: auto;
`;

export const ImgFort2 = styled.img`
  width: 40%;
  margin: auto;
  display: block;
  padding: 25px;

  @media screen and (max-width: 768px){
    width: 60%;
    padding: 0;
  }
`;
export const ChoiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 20px 100px;
  border-radius: 25px;
  padding: 0 50px;
  gap: 10px;
  background: #F2F6FB;
  
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 10px 20px;
    margin: 20px 10px;
  }
`;
export const CheckIcon = styled(FaCheck)`
  font-size: 20px;
  margin-bottom: 10px;
  color: #86d38e;
  font-weight: 900;
`;

