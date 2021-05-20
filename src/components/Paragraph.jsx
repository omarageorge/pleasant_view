import { Fade } from 'react-reveal';
import styled from 'styled-components';

const P = styled.p`
  display: block;
  width: 100%;

  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  font-weight: 300;
  /* text-align: center; */
  line-height: 1.8;
  color: #6c757d;
  margin-top: 0rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
    text-align: ${(props) => (props.center ? 'center' : 'left')};
  }

  @media only screen and (max-width: 568px) {
    text-align: center;
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;

const Paragraph = ({ center, children }) => {
  return <Fade>{center ? <P center>{children}</P> : <P>{children}</P>}</Fade>;
};

export default Paragraph;
