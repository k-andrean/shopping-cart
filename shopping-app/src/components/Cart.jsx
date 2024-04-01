import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getProductById } from './Helper';


const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  border: 2px solid gray;
`;

const CartHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  font-weight: 700;
`;


const CartItem = styled.div`
  margin-bottom: 20px;

  display: flex;
  justify-content: center;

  gap: 1rem;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityInput = styled.input`
  width: 50px;
  margin: 0 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`;

const CheckoutButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  font-size: 20px;
`;

const TotalPrice = styled.p`
  font-weight: 700;
`;

const Cart = ({ dataList, cart, setCart, totalPrices, setTotalPrices, totalAllPrice, setTotalAllPrice }) => {
  
  const [copyCart, setCopyCart] = useState({ ...cart });
  const [tempTotalPrices, setTempTotalPrices] = useState({...totalPrices})
  const [tempTotalAllPrice, setTempTotalAllPrice] = useState(totalAllPrice);

  const navigateTo = useNavigate();

  const handleCheckout = () => {
    // Update original cart with copyCart values
    handleUpdateAppState();
    // Redirect to checkout page
    navigateTo('/checkout');
  };

  const handleUpdateAppState = () => {
    setCart({...copyCart});
    
    setTotalPrices({...tempTotalPrices});
  
  // Update original total all price
    setTotalAllPrice(tempTotalAllPrice);
  };

  const handleAddClick = (productId) => {
    setCopyCart((prevCopyCart) => {
      const updatedCart = { ...prevCopyCart };
      updatedCart[productId] = (prevCopyCart[productId] || 0) + 1;
      return updatedCart;
    });
  };
  
  const handleReduceClick = (productId) => {
    if (copyCart[productId] > 1) {
      setCopyCart((prevCopyCart) => {
        const updatedCart = { ...prevCopyCart };
        updatedCart[productId] -= 1;
        return updatedCart;
      });
    }
  };
  
  const handleInputChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setCopyCart((prevCopyCart) => ({
        ...prevCopyCart,
        [productId]: newQuantity
      }));
    }
  };


  useEffect(() => {
    let tempTotalPrices = {};
    Object.keys(copyCart).forEach(productId => {
      const product = getProductById(dataList, productId);
      if (product) {
        tempTotalPrices[productId] = product.price * copyCart[productId];
      }
    });
    setTempTotalPrices(tempTotalPrices);

    let tempTotalAllPrice = 0;
    Object.values(tempTotalPrices).forEach(price => {
      tempTotalAllPrice += price;
    });
    setTempTotalAllPrice(tempTotalAllPrice);
  }, [copyCart, dataList]);

  return (
    <CartContainer>
      <CartHeading>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </CartHeading>
      {Object.keys(cart).map(productId => {
        const product = getProductById(dataList, productId);
        if (!product) return null;

        const totalProductPrice = tempTotalPrices[productId] || 0;
  
        return (
          <CartItem key={productId}>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <QuantityControl>
            <Button onClick={() => handleReduceClick(productId)}>-</Button>
              <QuantityInput
                type="number"
                value={copyCart[productId] || ''}
                onChange={(e) => handleInputChange(e, productId)}
              />
            <Button onClick={() => handleAddClick(productId)}>+</Button>
            </QuantityControl>
            <p>${totalProductPrice.toFixed(2)}</p>
          </CartItem>
        );
      })}
      <TotalPrice>Total Price: $ {(tempTotalAllPrice ?? 0).toFixed(2)}</TotalPrice>
      <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
    </CartContainer>
  );
}

export default Cart;