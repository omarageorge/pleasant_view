import styled from 'styled-components';
import { Zoom, Fade } from 'react-reveal';

const TextWrapper = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ccc;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.h3`
  font-size: 3.125rem;
  font-weight: 400;
  color: #242424;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionTitleAndDescription = ({ title, children }) => {
  return (
    <TextWrapper>
      <Zoom>
        <Title>{title}</Title>
      </Zoom>
      <Fade bottom>
        <Description>{children}</Description>
      </Fade>
    </TextWrapper>
  );
};

export default SectionTitleAndDescription;
