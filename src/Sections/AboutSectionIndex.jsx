import styled from 'styled-components';
import Paragraph from '../components/Paragraph';
import SectionTitleAndDescription from '../components/SectionTitleAndDescription';
import { Button } from '../components/Button';

const Container = styled.div`
  width: 100%;
  padding: 5rem 0rem;
  background: #fff;

  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 1rem !important;
  }
`;

const Col1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Col2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 3rem;
  }

  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 96%;
  height: auto;
  border-radius: 20px;
  margin: auto;
`;

const AboutSection = () => {
  return (
    <Container>
      <Col1>
        <Text>
          <SectionTitleAndDescription title='EXPLORE OUR AMAZING VIEW'>
            Stay and Enjoy
          </SectionTitleAndDescription>

          <Paragraph center>
            Pleasant View Hotel is a very nice hotel in Kitgum Municipality with
            good customer care services. The staff are nice to guests and serve
            people with respect. The hotel offers internet services and pick up
            services for guests from town center to the hotel.
          </Paragraph>

          <div className='pt-2'>
            <Button url='/about' primary>
              MORE ABOUT US
            </Button>
          </div>
        </Text>
      </Col1>
      <Col2>
        <Image src='/about.jpg' />
      </Col2>
    </Container>
  );
};

export default AboutSection;
