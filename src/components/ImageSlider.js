// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';  // Optional for custom styles

function ImageSlider({ images }) {
  const settings = {
    dots: true,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    arrows: true,  
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="project-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
