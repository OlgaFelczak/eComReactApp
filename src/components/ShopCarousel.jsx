// import React from 'react'

// const Carousel = () => {
//   return (
//     <div>Carousel</div>
//   )
// }

// export default Carousel
import Carousel from 'react-bootstrap/Carousel';
import '../styles/shopCarousel.css';

function ShopCarousel() {
  return (
    <Carousel className='carouselStyle'>
      <Carousel.Item interval={3000}>
        <img
          className='d-block w-100 imgStyle'
          // src="holder.js/800x400?text=First slide&bg=373940"
          src='/Images/carouselpic10.png'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className='d-block w-100 imgStyle'
          // src="holder.js/800x400?text=Second slide&bg=282c34"
          src='/Images/carouselpic13.png'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 imgStyle'
          src='/Images/carouselpic1.png'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ShopCarousel;
