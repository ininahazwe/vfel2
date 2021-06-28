import styled from 'styled-components';

export const PackWrapper = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  border-top: 1px dashed;
 
  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 20px;
  }
`;

export const PackBox = styled.div`
  @media screen and (max-width: 768px){
    margin-top: 10px;
  }
`;

export const PackIcon = styled.img`
  width: 50%;
  display: block;

  @media screen and (max-width: 768px){
    width: 30%;
  }
`;

export const PackCheck = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  gap: 5px;
  padding: 50px;
  border-radius: 25px;

  @media screen and (max-width: 768px){
    padding: 0;
  }
`;