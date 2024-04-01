import cart1 from '../assets/carts.png';
import styled from 'styled-components';

const CartIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const CartImage = () => {
  return <CartIcon src={cart1} alt="Cart Image" />;
};

export default CartImage;
