import React from 'react';
import Slider from 'react-slick';
import app1 from '../assets/app1.png';
import app2 from '../assets/app2.png';
import app3 from '../assets/app3.png';
import app4 from '../assets/app4.png';
import app5 from '../assets/app5.png';
import app6 from '../assets/app6.png';
import app7 from '../assets/app7.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = () => {
  const images = [app1, app2, app3, app4, app5, app6, app7];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="absolute w-full h-auto ">
      {images.map((image, index) => (
        <div key={index} className="w-full">
          <img src={image} alt={`Slide ${index + 1}`} className="w-full rounded-[30px] px-4 py-4" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
