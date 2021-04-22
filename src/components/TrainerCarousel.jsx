import React, { useState } from 'react';
import { TrainerImages } from './TrainerImages';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import './carousel.css';

function TrainerCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      {TrainerImages.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide.image} alt="some pokemon" className="image" />}
          </div>
        );
      })}
      <div className="button-container">
        <ChevronLeftIcon className="left-arrow" onclick={prevSlide} />
        <ChevronRightIcon className="right-arrow" onClick={nextSlide} />
      </div>
    </section>
  );
}

export default TrainerCarousel;
