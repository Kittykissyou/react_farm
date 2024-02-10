import { useState, useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Icon from './Iconset';
import Slide from './Slide';

const Slider = function () {
  const data = useContext(MyContext);

  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = data.infoBlock.length - 1;
    } else {
      slideNumber = (slide + direction) % data.infoBlock.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % data.infoBlock.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < data.infoBlock.length; i++) {
      dots.push(
        <div
          className={`dot ${slide === i ? 'selected' : ''}`}
          key={`dot-${i}`}
          onClick={() => goToSlide(i)}
        />
      );
    }

    return dots;
  };
  return (
    <div className="slider-container">
      <div
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Icon
          icon="arrow_back"
          size={data.adaptiveFont(32, 24)}
          className="_icon _arrows"
          onClick={() => changeSlide(-1)}
        />
        <div
          className="slider-list"
          style={{ transform: `translateX(-${slide * 120}%)` }}
        >
          {data.infoBlock.map((el, index) => {
            return <Slide key={index} id={index} />;
          })}
        </div>

        <Icon
          icon="arrow_forward"
          size={data.adaptiveFont(32, 24)}
          className="_icon _arrows"
          onClick={() => changeSlide(1)}
        />
      </div>
      <div className="dots">{renderDots()}</div>
    </div>
  );
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
};

export default Slider;
