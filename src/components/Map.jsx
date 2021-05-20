import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.iframe`
  width: 100%;
  height: 25rem;
  border: 1px solid #fff;
  border-radius: 10px;

  margin-top: 2rem;
  @media only screen and (max-width: 568px) {
    height: 20rem;
  }
`;

const Map = () => (
  <MapContainer
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.273348438327!2d32.88927031416772!3d3.282270353236633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1773eff897aaaacb%3A0xba83565e9b3e37d6!2sPleasant%20View%20Hotel!5e0!3m2!1sen!2sug!4v1615465250226!5m2!1sen!2sug'
    loading='lazy'
  />
);

export default Map;
