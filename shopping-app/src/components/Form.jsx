import styled from 'styled-components';
import CartImage from './CartImage';

const FormContainer = styled.div`
  background-color: #f3f4f6;
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;

  display:flex;
  justify-content:center;
`;

const Paragraph = styled.p`
  color: #666;
  margin-bottom: 10px;

  font-size: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Span = styled.span`
  margin-left: 10px;

  font-size: 1.5rem;
`;

const Form = () => {
  return (
    <FormContainer className="form-container">
      <Heading>Contact Me</Heading>
      <List>
        <ListItem>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt beneficial mistales.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt beneficial mistales.
          </Paragraph>
        </ListItem>
        <ListItem>
          <CartImage />
          <Span>555-555-5555</Span>
        </ListItem>
        <ListItem>
          <CartImage />
          <Span>Ashley.is.not.real@gmail.com</Span>
        </ListItem>
      </List>
    </FormContainer>
  );
};

export default Form;