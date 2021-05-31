import React from 'react';
import styled from 'styled-components';

const SuccessAlertBox = styled.p`
  width: auto;
  font-family: 'sans-serif';
  font-weight: 500;
  padding: 1rem;
  color: darkgreen;
  background-color: #a7ec74;
  border: 2px dashed green;
`;

const SuccessAlert = ({ message }) => (
  <SuccessAlertBox>{message}</SuccessAlertBox>
);

export default SuccessAlert;
