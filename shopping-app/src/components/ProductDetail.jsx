import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProductById } from './Helper';

const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
`;

const ImageContainer = styled.div`
  max-width: 100%
  height: auto;

  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: grid;
  gap: 1rem;

  width: 100%;
`;

const ProductDetailHeadingWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-left: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  list-style-type: none;

  display: flex;
  align-items: center;

  label {
    margin-right: 1rem; 
  }
`;

const Button = styled.button`
  padding: 5px 5px;

  height: 30px;
  cursor: pointer;
`;

const QuantityInput = styled.input`
  width: 60px;
  margin: 0 10px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-left: 2rem;

  gap: 1rem;
`;

const ProductDetail = ({ dataList, cart, setCart }) => {
    const [quantity, setQuantity] = useState(1);
    const navigateTo = useNavigate();
    const { productId } = useParams();
    const product = getProductById(dataList, productId);
  

    const handleSubmitBuy = (e, productId) => {
      e.preventDefault();
      if (product) {
        const updatedCart = { ...cart };
        console.log(updatedCart);
        if (updatedCart[productId]) {
          updatedCart[productId] += quantity;
        } else {
          updatedCart[productId] = quantity;
        }
        setCart(updatedCart);
      }
      navigateTo('/cart');
  };

    const handleAddToCart = (e, productId) => {
      e.preventDefault();
      if (product) {
        const updatedCart = { ...cart };
        console.log(updatedCart);
        if (updatedCart[productId]) {
          updatedCart[productId] += quantity;
        } else {
          updatedCart[productId] = quantity;
        }
        setCart(updatedCart);
      }
      setQuantity(1);
    };

    const handleInputChange = (event) => {
      const newQuantity = parseInt(event.target.value);
      if (!isNaN(newQuantity) && newQuantity >= 1) {
        setQuantity(newQuantity); // Update local quantity state
      }
    };
  
    const handleAddClick = (e) => {
      e.preventDefault();
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const handleReduceClick = (e) => {
      e.preventDefault();
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
  

  return (
    <ProductDetailContainer>
      <ImageContainer>
        {product && (
          <Image src={product.image} alt={product.name} />
        )}
      </ImageContainer>
      <InfoContainer>
        <ProductDetailHeadingWrapper>
          <h2>Product Detail</h2>
        </ProductDetailHeadingWrapper>
        <Form>
          <ul>
            <ListItem>Product Name: {product ? product.name : ''}</ListItem>
            <ListItem>Category: {product ? product.category : ''}</ListItem>
            <ListItem>Price: {product ? `$${product.price}` : ''}</ListItem>
            <ListItem>
              <label>Quantity:</label>
              <Button onClick={handleReduceClick}>-</Button>
              <QuantityInput
                type="number"
                value={quantity || ''}
                onChange={handleInputChange}
              />
              <Button onClick={handleAddClick}>+</Button>
            </ListItem>
          </ul>
          <ButtonsContainer>
              <Button onClick={(e) => handleSubmitBuy(e, productId)}>Buy</Button>
              <Button onClick={(e) => handleAddToCart(e, productId)}>Add to Cart</Button>
          </ButtonsContainer>
        </Form>
      </InfoContainer>
    </ProductDetailContainer>
  );
};

export default ProductDetail;