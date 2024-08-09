'use client'
import React, { Component } from 'react';
import Slider from 'react-slick'; // Assuming you're using react-slick
import styles from './homeSlider.module.css'
const sliderArray = [
  {
    sliderImage: "/assets/images/img01.jpeg",
  }, 
  {
    sliderImage: "/assets/images/img02.jpeg",
  }, 
  {
    sliderImage: "/assets/images/img03.jpeg",
  }, 
  {
    sliderImage: "/assets/images/img04.jpeg",
  }, 
];





class SlickSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} className={styles.sliderContainer}>
        {sliderArray.map((item, index) => (
          <div key={index} className={styles.slider}>
            <img
              src={item.sliderImage}
              className={styles.sliderimg}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    );
  }
}

export default SlickSlider;
