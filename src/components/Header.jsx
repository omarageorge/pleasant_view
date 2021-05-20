import styled from 'styled-components';
import { Zoom, Fade } from 'react-reveal';
import Navbar from './Navbar';
import Carousel from './Carousel';
import { BigButton } from './Button';

const MainWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.mini ? '85vh' : '100vh')};

  position: relative;
  z-index: 0;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 1;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 2;

  background-color: #000;
  opacity: 0.45;
`;

const Text = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.div`
  width: 100%;

  position: absolute;
  z-index: 4;
`;

const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  text-transform: capitalize;
  color: #fff;

  text-align: center;

  @media only screen and (max-width: 768px) {
    font-weight: 300;
  }

  @media only screen and (max-width: 568px) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  color: #fff;
  opacity: 0.8;

  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-weight: 300;
  }

  @media only screen and (max-width: 568px) {
    font-size: 1.2rem;
  }
`;

const Header = ({ thumbnail, title, description }) => {
  if (thumbnail != null) {
    return (
      <MainWrapper mini>
        <Background>
          <BackgroundImage url={thumbnail} />
        </Background>
        <Overlay />
        <Text>
          <Fade bottom>
            <H1>{title}</H1>
          </Fade>
          <Fade bottom>
            <P>{description}</P>
          </Fade>
        </Text>
        <Nav>
          <Navbar />
        </Nav>
      </MainWrapper>
    );
  } else {
    return (
      <MainWrapper>
        <Background>
          <Carousel />
        </Background>
        <Overlay />
        <Text>
          <Zoom top>
            <H1>{title}</H1>
          </Zoom>
          <Fade bottom>
            <P>{description}</P>
          </Fade>
          <Fade bottom>
            <BigButton url='/book' primary>
              Book now
            </BigButton>
          </Fade>
        </Text>
        <Nav>
          <Navbar />
        </Nav>
      </MainWrapper>
    );
  }
};

export default Header;
