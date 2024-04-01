import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import ErrorPage from "./components/ErrorPage";
import { fetchData, getProductById } from "./components/Helper";

// Styled container for the main content
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: #f3f4f6; 
`;

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    return storedCart !== null ? storedCart : {};
  });
  const [totalPrices, setTotalPrices] = useState({});
  const [totalAllPrice, setTotalAllPrice] = useState(0);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData(setDataList);
  }, []); 

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const newTotalPrices = {};
    Object.keys(cart).forEach(productId => {
      const product = getProductById(dataList, productId);
      if (product) {
        newTotalPrices[productId] = product.price * cart[productId];
      }
    });
    setTotalPrices(newTotalPrices);

    let totalAllPrice = 0;
    Object.values(totalPrices).forEach(price => {
      totalAllPrice += price;
    });
    setTotalAllPrice(totalAllPrice);
    
  }, [cart, dataList]);


  return (
    <MainContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop dataList={dataList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart dataList={dataList} cart={cart} setCart={setCart} totalPrice={totalPrices} setTotalPrices={setTotalPrices} totalAllPrice={totalAllPrice} setTotalAllPrice={setTotalAllPrice} />} /> 
        <Route path="/product/:productId" element={<ProductDetail dataList={dataList} cart={cart} setCart={setCart}/>} />
        <Route path="/checkout" element={<Checkout totalAllPrice={totalAllPrice} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </MainContainer>
  );
};

export default App;