import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FormButton } from '../components/Button';
import SuccessAlert from '../components/SuccessAlert';
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
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rooms: '',
    guests: '',
    arrivalDate: '',
    departureDate: '',
    note: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/mailer/book', formData);

    setFormData({
      name: '',
      email: '',
      rooms: '',
      guests: '',
      arrivalDate: '',
      departureDate: '',
      note: '',
    });

    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <Container>
      <FormRow>
        <FormCol>
          <FormTitle>Book now!</FormTitle>
          <Form onSubmit={handleSubmit}>
            <PairFields>
              <FieldContainer rightPadding>
                <Label>Name</Label>
                <Input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FieldContainer>

              <FieldContainer leftPadding>
                <Label>Email</Label>
                <Input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FieldContainer>
            </PairFields>

            <PairFields>
              <FieldContainer rightPadding>
                <Label>Number of Rooms</Label>
                <Input
                  type='number'
                  name='rooms'
                  value={formData.rooms}
                  onChange={handleChange}
                  required
                />
              </FieldContainer>

              <FieldContainer leftPadding>
                <Label>Number of Guests</Label>
                <Input
                  type='number'
                  name='guests'
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </FieldContainer>
            </PairFields>

            <PairFields>
              <FieldContainer rightPadding>
                <Label>Arrival Date</Label>
                <Input
                  type='date'
                  name='arrivalDate'
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  required
                />
              </FieldContainer>

              <FieldContainer leftPadding>
                <Label>Departure Date</Label>
                <Input
                  type='date'
                  name='departureDate'
                  value={formData.departureDate}
                  onChange={handleChange}
                  required
                />
              </FieldContainer>
            </PairFields>

            <FieldContainer>
              <Label>Write a Note</Label>
              <TextArea
                name='note'
                value={formData.note}
                onChange={handleChange}
              />
            </FieldContainer>

            <FieldContainer>
              <FormButton primary>RESERVE NOW</FormButton>
            </FieldContainer>

            {sent && (
              <FieldContainer>
                <SuccessAlert message='Booking request sent' />
              </FieldContainer>
            )}
          </Form>
        </FormCol>
      </FormRow>
    </Container>
  );
};

export default BookSection;
