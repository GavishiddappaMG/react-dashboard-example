import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return (
    <Carousel>
      <div>
        <img alt="'legend 1'" src="https://placehold.co/100x100" />
        <p>Legend 1</p>
      </div>
      <div>
        <img alt="'legend 2'" src="http://placehold.co/200x200" />
        <p>Legend 2</p>
      </div>
      <div>
        <img alt="'legend 3'" src="http://placehold.co/300x300" />
        <p>Legend 3</p>
      </div>
    </Carousel>
  );
}

export default CarouselPage;