import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 5rem 6rem;
  background-color: #f2f2f2;

  @media only screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media only screen and (max-width: 568px) {
    padding: 4rem 4rem;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 568px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex: 1;

  @media only screen and (max-width: 568px) {
    margin-bottom: 2rem;
  }
`;

const Label = styled.span`
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b3b3b3;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  color: #242424;

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Icons = styled.div`
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialMediaLink = styled.a`
  font-size: 1.3rem;
  color: #242424;
  transition: all 1s ease;
  outline: none;

  &:hover {
    color: #b3b3b3;
  }
`;

const FootNote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #6d747e;
  margin-top: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Col>
          <Fade>
            <Label>Phone support</Label>
            <Text>24/7 Call us now.</Text>
            <Text>+256 393 225 757</Text>
          </Fade>
        </Col>

        <Col>
          <Fade>
            <Label>Connect with us</Label>
            <Text>We are socialized. Follow us</Text>
            <Icons>
              <SocialMediaLink href='#' target='_blank'>
                <FaFacebook />
              </SocialMediaLink>
              <SocialMediaLink href='#' target='_blank'>
                <FaTwitter />
              </SocialMediaLink>
              <SocialMediaLink href='#' target='_blank'>
                <FaInstagram />
              </SocialMediaLink>
            </Icons>
          </Fade>
        </Col>

        <Col>
          <Fade>
            <Label>Address</Label>
            <Text>Kitgum municipality</Text>
            <Text>First Jenge, Pandwong Division</Text>
            <Text>P.O Box 209</Text>
          </Fade>
        </Col>
      </Row>

      <Fade bottom>
        <FootNote>
          Copyright &copy; {new Date().getFullYear()} All rights reserved.
        </FootNote>
      </Fade>
    </FooterContainer>
  );
};

export default Footer;
