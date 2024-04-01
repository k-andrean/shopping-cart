import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 4px solid gray;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
  

  &:hover {
    box-shadow: 0 0 30px blue;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 4px solid gray;

  padding: 1rem;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;

  & > p {
    text-align: justify; 
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-around;

  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const Card = ({ dataList, handleClickCard }) => {
  return (
    <CardContainer>
      {dataList.map((data) => (
        <CardWrapper key={data.id} onClick={() => handleClickCard(data.id)}>
          <ImageContainer>
            {data.image && <Image src={data.image} alt={data.name} />}
          </ImageContainer>
          <DataContainer>
            <PriceContainer>
              <h4>{data.name}</h4>
              <p>$ {data.price}</p>
            </PriceContainer>
            <p>{data.description}</p>
          </DataContainer>
        </CardWrapper>
      ))}
    </CardContainer>
  );
};

export default Card;