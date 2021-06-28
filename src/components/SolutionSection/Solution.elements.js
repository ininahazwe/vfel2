import styled from 'styled-components';

export const PackWrapper = styled.div`

`;

export const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  padding: 0 120px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0;
    gap: 10px;
  }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  border-radius: 10px;
  transition: all 200ms ease;
  
  &:hover{
    transform: translate(0px, -10px);
  }
  @media screen and (max-width: 768px){
    padding: 25px;
  }
`;

export const OptionTete = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  background: #f9f9f9;
  background: ${({ blue }) => (blue ? '#CCE3FF' : '#f9f9f9')};
  border-radius: 25px;
  padding: 0 20px;
  z-index: 1;
`;

export const OptionDescription = styled.div`
  padding: 50px 20px;
  border: 1px dashed lightgrey;
  margin: -50px 5px 0 5px;
  border-radius: 25px;
`;

export const OptionIcon = styled.img`
  height:100px;
  width: 100px;
  margin-top: 20px;
  padding: 10px;
  fill: #CCE3FF;
`;

export const SolutionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  //padding: 50px 0;
  //margin: 0 150px;
  margin: 20px 100px;
  background: #F2F6FB;
  border-radius: 25px;
  
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

export const SolutionBox = styled.div`
`;

export const ButtonContainer = styled.div`
  display: flex;
`;


