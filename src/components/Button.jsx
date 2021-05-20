import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  color: ${(props) => (props.primary ? '#ffffff' : '#b99366')};
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  padding: 0.8rem 1.5rem;
  background-color: ${(props) => (props.primary ? '#b99366' : 'transparent')};
  border: 2px solid #b99366;
  outline: none;
  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => (props.primary ? '#b99366' : '#ffffff')};
    background-color: ${(props) => (props.primary ? 'transparent' : '#b99366')};
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  font-size: 1.2rem !important;
  font-weight: 400 !important;
`;

export const Button = ({ url, primary, children }) => {
  return (
    <Link href={url ? url : '#'}>
      {primary ? (
        <PrimaryButton primary>{children}</PrimaryButton>
      ) : (
        <PrimaryButton>{children}</PrimaryButton>
      )}
    </Link>
  );
};

export const BigButton = ({ url, primary, children }) => {
  return (
    <Link href={url ? url : '#'}>
      {primary ? (
        <SecondaryButton primary>{children}</SecondaryButton>
      ) : (
        <SecondaryButton>{children}</SecondaryButton>
      )}
    </Link>
  );
};

export const FormButton = ({ primary, children }) => {
  return (
    <>
      {primary ? (
        <SecondaryButton primary>{children}</SecondaryButton>
      ) : (
        <SecondaryButton>{children}</SecondaryButton>
      )}
    </>
  );
};
