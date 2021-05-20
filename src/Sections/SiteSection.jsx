import styled from 'styled-components';
import { Fade } from 'react-reveal';

const Container = styled.div`
  width: 100%;
  height: 28rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url('/sitesection.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;

    /* background-color: #b99366; */
    background-color: #6b4b24;
    /* background-color: #000; */
    opacity: 0.6;
  }

  @media only screen and (max-width: 568px) {
    height: 20rem;
  }
`;

const Text = styled.h4`
  position: absolute;
  z-index: 1;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  color: #fff;

  @media only screen and (max-width: 568px) {
    font-size: 2rem;
  }
`;

const SiteSection = () => {
  return (
    <Fade>
      <Container>
        <Text>Relax and Enjoy your Time</Text>
      </Container>
    </Fade>
  );
};

export default SiteSection;
