import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Shop = ({ dataList }) => {
  const navigateTo = useNavigate();

  const handleClickCard = (productId) => {
    navigateTo(`/product/${productId}`);
  };

  return (
    <div>
      <Card dataList={dataList} handleClickCard={handleClickCard} />
    </div>
  );
};

export default Shop;