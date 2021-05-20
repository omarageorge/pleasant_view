import React, { useState } from 'react';
import { FormButton } from '../components/Button';
import {
  Form,
  FieldContainer,
  FormRow,
  FormCol,
  FormTitle,
  Label,
  Input,
  TextArea,
} from '../components/Input';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin: auto;
  padding: 5rem 0rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 4rem 1rem;
  }
`;

const PairFields = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 568px) {
    flex-direction: column;
  }
`;

const BookSection = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormSubmit
  };

  return (
    <Container>
      <FormRow>
        <FormCol>
          <FormTitle>Book now!</FormTitle>
          <Form onSubmit={handleSubmit}>
            <PairFields>
              <FieldContainer rightPadding>
                <Label>Arrival Date</Label>
                <Input
                  type='date'
                  name='name'
                  onChange={handleChange}
                  required
                />
              </FieldContainer>

              <FieldContainer leftPadding>
                <Label>Departure Date</Label>
                <Input
                  type='date'
                  name='phone'
                  onChange={handleChange}
                  required
                />
              </FieldContainer>
            </PairFields>

            <PairFields>
              <FieldContainer rightPadding>
                <Label>Rooms</Label>
                <Input
                  type='number'
                  name='phone'
                  onChange={handleChange}
                  required
                />
              </FieldContainer>

              <FieldContainer leftPadding>
                <Label>Guests</Label>
                <Input
                  type='number'
                  name='phone'
                  onChange={handleChange}
                  required
                />
              </FieldContainer>
            </PairFields>

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
              <Label>Write a Note</Label>
              <TextArea name='message' onChange={handleChange} required />
            </FieldContainer>

            <FieldContainer>
              <FormButton primary>RESERVE NOW</FormButton>
            </FieldContainer>
          </Form>
        </FormCol>
      </FormRow>
    </Container>
  );
};

export default BookSection;
