import React from 'react';
import './About.css';

const TextNavigater = ({ type, index, data, onHandleNext, onHandleBack }) => {
  if (type === 'text') {
    return (
      <div>
        <p>{data[index]}</p>
        <button className='back-button' onClick={onHandleBack}>
          Back
        </button>
        <button className='next-button' onClick={onHandleNext}>
          Next
        </button>
      </div>
    );
  }

  if (type === 'image') {
    return <img src={data[index]} alt='Maymunah Hicks' />;
  }

  return null;
};

export default TextNavigater;
// create an array
// const texts = ["text1", "text2", "text3", "text4"]
// add state
// const [currentIndex, setCurrentIndex] = useState(0)
// I was introduced to coding during my freshman year of college when I
// took a crash course on FreeCodeCamp. Ever since then, I've really
// enjoyed it. There's something amazing about seeing my ideas come to
// life on the screen. Plus, as a Black Muslim woman in the tech
// industry, I’m happy to represent diversity in this space.{" "}
