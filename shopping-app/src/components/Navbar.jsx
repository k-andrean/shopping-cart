import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin-right: 1rem;
`;

const NavbarLink = styled(Link)`
  color: beige;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease-in-out;
  border-radius: 0.25rem;
  font-size: 1rem;

  &:hover {
    background-color: #374151;
  }
`;


const Navbar = () => {
  return (
    <NavbarList>
      <NavbarItem>
        <NavbarLink to="/">Home</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink to="/shop">Shop</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink to="/about">About</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink to="/cart">Cart</NavbarLink>
      </NavbarItem>
    </NavbarList>
  );
};

export default Navbar;
