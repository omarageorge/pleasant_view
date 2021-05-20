import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { Button } from './Button';

const CardContainer = styled.div`
  width: 22rem;
  margin: 1rem;

  @media only screen and (max-width: 768px) {
    width: 90% !important;
  }
`;

const CardMiniContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 1.5rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: ${(props) => (props.large ? '20rem' : '15rem')};

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

const CardCategory = styled.h3`
  display: block;

  font-family: 'Rubik', sans-serif;
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ccc;

  margin-bottom: 0.8rem;
`;

const Line = styled.hr`
  width: 3.1rem;
  border: 0px solid #000;
  border-bottom: 0.5px solid #000;
  margin-bottom: 0.8rem;
`;

const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.2;
  color: #b99365;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  display: block;
  height: ${(props) => (props.small ? '8rem' : '11rem')};
  font-family: 'Rubik', arial, sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.8;
  color: #6c757d;
  margin-bottom: 1.5rem;
`;

export const Card = ({ thumbnail, category, title, link, children }) => {
  return (
    <Fade>
      <CardContainer>
        <CardImage src={thumbnail} />
        <CardMiniContainer>
          <CardCategory>{category}</CardCategory>
          <Line />
          <Link href='#'>
            <CardTitle>{title}</CardTitle>
          </Link>
          <Paragraph>{children}</Paragraph>
          <Button url={link}>READ MORE</Button>
        </CardMiniContainer>
      </CardContainer>
    </Fade>
  );
};

export const BioCard = ({ picture, post, name }) => {
  return (
    <Fade>
      <CardContainer>
        <CardImage src={picture} large />
        <CardMiniContainer>
          <CardCategory>{post}</CardCategory>
          <Line />
          <CardTitle>{name}</CardTitle>
        </CardMiniContainer>
      </CardContainer>
    </Fade>
  );
};
