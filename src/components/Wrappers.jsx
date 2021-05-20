import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerFluid = styled(Container)`
  width: 100%;
  margin: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 4rem;
  padding-bottom: 5rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  background-color: #f8f9fa;

  @media only screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (max-width: 568px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const CardDeck = styled(Container)`
  width: 100%;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  background-color: transparent;

  @media only screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
