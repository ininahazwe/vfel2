import styled from "styled-components";

export const RealWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-self: center;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 20px 200px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
`;

export const Real = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin: 10px;
  padding: 20px;
  height: 350px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0,0,0,.08);
  transition: all 300ms ease;
  
  &:hover{
    box-shadow: 0 6px 10px rgb(136 193 214 / 38%);
  }
`;