import styled, { keyframes } from 'styled-components';
import work1 from '../assets/work.png';
import Form from './Form';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  min-height: 100vh;

  animation: ${fadeIn} 2s ease;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 300px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit:cover;
`;


const Contact = () => {
    return (
      <ContactContainer>
        <ImageContainer>
            <Image src={work1} alt="Contact Me"/>
        </ImageContainer>
        <Form />
      </ContactContainer >
    );
  };
  
export default Contact;