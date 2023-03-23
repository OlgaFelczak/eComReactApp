import Carousel from 'react-bootstrap/Carousel';
import '../styles/shopCarousel.css';

function ShopCarousel() {
  return (
    <Carousel className='carouselStyle'>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 imgCarouselStyle'
          src='/Images/carouselpic10.png'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>High-End Beauty Finds</h3>
          <p>Discover products to elevate your make up game.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className='d-block w-100 imgCarouselStyle'
          src='/Images/carouselpic13.png'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Transform your eyes with our eyeshadows</h3>
          <p>
            Whether you prefer subtle neutrals or bold hues, we've got a shade
            for you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 imgCarouselStyle'
          src='/Images/carouselpic1.png'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Lips That Pop</h3>
          <p>
            Get your lips looking their best with our selection of lipsticks,
            lip glosses, and lip liners.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ShopCarousel;
