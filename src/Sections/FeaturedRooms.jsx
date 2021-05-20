import Link from 'next/link';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import SectionTitleAndDescription from '../components/SectionTitleAndDescription';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 5rem 0rem;
  background-color: #f8f9fa;
`;

const Rooms = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 2rem;
  justify-content: space-between;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 98%;
    flex-direction: column;
  }
`;

const FeaturedRoom = styled.div`
  width: 90%;
  height: 25rem;
  margin: 1rem;
  display: block;
  position: relative;
  z-index: 0;

  cursor: pointer;

  background-image: ${(props) =>
    props.image ? `url(${props.image})` : `url('/thumb1.jpg')`};
  background-size: cover;
  background-position: center;

  overflow: hidden;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;

    background-color: #000;
    opacity: 0.5;
  }

  @media only screen and (max-width: 768px) {
    height: 30rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 568px) {
    height: 20rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 568px) {
    height: 20rem;
  }
`;

const FeaturedRoomText = styled.div`
  width: 100%;
  height: 15%;
  position: absolute;
  z-index: 2;
  top: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
`;

const FeaturedRoomName = styled.h4`
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #fff;
`;
const FeaturedRoomPrice = styled(FeaturedRoomName)`
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #ffc107;
  padding: 0.3rem;
  margin-left: 1rem;
`;

const FeaturedRooms = () => {
  return (
    <Container>
      <SectionTitleAndDescription title='OUR AMAZING ROOMS'>
        Featured Rooms
      </SectionTitleAndDescription>
      <Fade>
        <Rooms>
          <Link href='/book'>
            <FeaturedRoom image='room0.jpg'>
              <FeaturedRoomText>
                <FeaturedRoomName>Featured Room</FeaturedRoomName>
                <FeaturedRoomPrice>BOOK NOW</FeaturedRoomPrice>
              </FeaturedRoomText>
            </FeaturedRoom>
          </Link>

          <Link href='/book'>
            <FeaturedRoom image='room1.jpg'>
              <FeaturedRoomText>
                <FeaturedRoomName>Featured Room</FeaturedRoomName>
                <FeaturedRoomPrice>BOOK NOW</FeaturedRoomPrice>
              </FeaturedRoomText>
            </FeaturedRoom>
          </Link>
        </Rooms>
      </Fade>
    </Container>
  );
};

export default FeaturedRooms;
