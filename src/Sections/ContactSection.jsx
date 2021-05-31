import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
import SuccessAlert from '../components/SuccessAlert';

const LeftPadding = styled.div`
  padding-left: 2rem;

  @media only screen and (max-width: 768px) {
    padding-left: 0 !important;
  }
`;

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/mailer/message', formData);

    setFormData({ name: '', email: '', phone: '', message: '' });

    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <FormContainer>
      <FormRow>
        <FormCol>
          <FormTitle>Write to us!</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FieldContainer>
              <Label>Name</Label>
              <Input
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FieldContainer>

            <FieldContainer>
              <Label>Phone</Label>
              <Input
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
            </FieldContainer>

            <FieldContainer>
              <Label>Email</Label>
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FieldContainer>

            <FieldContainer>
              <Label>Write Message</Label>
              <TextArea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FieldContainer>

            <FieldContainer>
              <FormButton primary>SEND MESSAGE</FormButton>
            </FieldContainer>

            {sent && (
              <FieldContainer>
                <SuccessAlert message='Message sent' />
              </FieldContainer>
            )}
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
