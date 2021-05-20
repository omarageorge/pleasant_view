import React, { useState } from 'react';
import { FormButton } from '../components/Button';
import {
  FormContainer,
  Form,
  FieldContainer,
  FormRow,
  FormCol,
  FormTitle,
  Label,
  Input,
  TextArea,
} from '../components/Input';
import Map from '../components/Map';
import styled from 'styled-components';

const LeftPadding = styled.div`
  padding-left: 2rem;

  @media only screen and (max-width: 768px) {
    padding-left: 0 !important;
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormSubmit
  };

  return (
    <FormContainer>
      <FormRow>
        <FormCol>
          <FormTitle>Write to us!</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FieldContainer>
              <Label>Name</Label>
              <Input name='name' onChange={handleChange} required />
            </FieldContainer>

            <FieldContainer>
              <Label>Phone</Label>
              <Input name='phone' onChange={handleChange} required />
            </FieldContainer>

            <FieldContainer>
              <Label>Email</Label>
              <Input
                type='email'
                name='email'
                onChange={handleChange}
                required
              />
            </FieldContainer>

            <FieldContainer>
              <Label>Write Message</Label>
              <TextArea name='message' onChange={handleChange} required />
            </FieldContainer>

            <FieldContainer>
              <FormButton primary>SEND MESSAGE</FormButton>
            </FieldContainer>
          </Form>
        </FormCol>
        <FormCol>
          <LeftPadding>
            <FormTitle>Our location</FormTitle>
            <Map />
          </LeftPadding>
        </FormCol>
      </FormRow>
    </FormContainer>
  );
};

export default ContactSection;
