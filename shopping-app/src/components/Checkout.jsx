import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  animation: ${fadeIn} 2s ease;
`;

const SuccessMessage = styled.h2`
  margin-top: 20px;

  font-size: 40px;
  color: blue;
`;

const TotalPrice = styled.p`
  margin-top: 10px;
  font-size: 20px;

  font-weight: 700;
`;

const Checkout = ({ totalAllPrice }) => {
  return (
    <CheckoutContainer>
      <SuccessMessage>Please finish your payment</SuccessMessage>
      <TotalPrice>Total Price: ${totalAllPrice.toFixed(2)}</TotalPrice>
    </CheckoutContainer>
  );
};

export default Checkout;