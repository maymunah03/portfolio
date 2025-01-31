import React, { useState } from 'react';
import './About.css';
import { aboutText, aboutImages, aboutTitle } from '../data/about';
import ContentNavigator from './ContentNavigator';

export const About = () => {
  // add state
  const [currentIndex, setCurrentIndex] = useState(0);

  // handleNext function
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < aboutText.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  // handleBack function
  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className='wrapper'>
      <div className='about-coder'>
        <h1>{aboutTitle[currentIndex]}</h1>
        <ContentNavigator
          type='text'
          index={currentIndex}
          data={aboutText}
          onHandleNext={handleNext}
          onHandleBack={handleBack}
        />
      </div>
      <div className='photo'>
        <ContentNavigator
          type='image'
          index={currentIndex}
          data={aboutImages}
        />
      </div>
    </div>
  );
};
