import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;

  padding: 0 1rem;
`;

const Heading = styled.h1`
  margin: 0;
  
  font-size: 2rem;

  color: beige;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Heading>
        Ecommerce Shopping
      </Heading>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;