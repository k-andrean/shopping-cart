import styled, { keyframes } from 'styled-components';
import bagance2 from '../assets/bagance-2.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  animation: ${fadeIn} 2s ease;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

const About = () => {
  return (
    <AboutContainer>
      <Image src={bagance2} alt="Bagance 2"/>
    </AboutContainer >
  );
};

export default About;