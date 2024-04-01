import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bagance3 from '../assets/bagance-3.png';
import bagance4 from '../assets/bagance-4.png';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  max-width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const MyCarousel = () => {
  return (
    <StyledCarousel autoPlay={true} interval={4000} infiniteLoop={true} showArrows={true}>
      <div>
        <Image src={bagance3} alt="Bagance 2"/>
        <p className="legend">Welcome to Bagance Online Store</p>
      </div>
      <div>
        <Image src={bagance4} alt="Bagance 4" />
        <p className="legend">Join Reseller</p>
      </div>
    </StyledCarousel>
  );
};

export default MyCarousel;