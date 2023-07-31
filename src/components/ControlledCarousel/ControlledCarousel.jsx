import React from "react";
import {Carousel} from 'react-bootstrap';


const ControlledCarousel = () => {

    return (
        <>
            <Carousel >
      <Carousel.Item interval={null}>
      <img className="carouselimage" src="/public/images/compactcar.jpeg" alt="Compact Car" />
        <Carousel.Caption>
          <h1>Compact Cars</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
      <img className="carouselimage" src="/public/images/luxurycar.jpeg" alt="Luxury Car" />
        <Carousel.Caption>
          <h1>Luxury Cars</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
      <img className="carouselimage" src="/public/images/suv.jpeg" alt="SUV" />
        <Carousel.Caption>
          <h1>SUVs</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
      <img className="carouselimage" src="/public/images/minivan.jpeg" alt="Minivan" />
        <Carousel.Caption>
          <h1>Minivans</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
      <img className="carouselimage" src="/public/images/truck.jpeg" alt="Truck" />
        <Carousel.Caption>
          <h1>Trucks</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    );
}

export default ControlledCarousel;