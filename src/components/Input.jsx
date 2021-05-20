import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  padding: 5rem 3rem;

  @media only screen and (max-width: 568px) {
    padding: 3rem 1.5rem;
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
  padding-left: ${(props) => (props.leftPadding ? '1rem' : '0rem')};
  padding-right: ${(props) => (props.rightPadding ? '1rem' : '0rem')};

  @media only screen and (max-width: 568px) {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  }
`;

export const FormTitle = styled.span`
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 400;
  color: #191511;
  margin-bottom: 1rem;
`;

export const FormRow = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormCol = styled.div`
  flex: 1;
`;

export const Label = styled.label`
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #6c757d;
  margin-bottom: 1rem;
`;

export const Form = styled.form``;

export const Input = styled.input.attrs((props) => ({
  type: props.type ? props.type : 'text',
}))`
  width: 100%;
  height: 2.4rem;

  padding: 1rem 0.8rem;

  border: 1px solid #ced3db;
  background-color: #fff;
  outline: none;

  &:focus {
    border: 1px solid #b8995f;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;

  padding: 1rem 0.8rem;

  border: 1px solid #ced3db;
  outline: none;

  &:focus {
    border: 1px solid #b8995f;
  }
`;
