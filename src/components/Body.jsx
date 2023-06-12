import { useContext } from 'react';
import { MyContext } from './Context';
import Icon from './Iconset';
const Body = () => {
  const data = useContext(MyContext);
  const sliderHandler = () => {};
  const slider = document.querySelector('._slider');
  console.log(slider);
  /* 
  const sliders = slider.children;
  let firstSlide = slider.lastElementChild.cloneNode(true);
  slider.prepend(firstSlide);
  firstSlide.style.left = `${
    (parseInt(getComputedStyle(firstSlide.nextElementSibling).left) /
      parseInt(getComputedStyle(slider).width)) *
      100 -
    (parseInt(getComputedStyle(sliders[0]).width) /
      parseInt(getComputedStyle(slider).width)) *
      100 -
    50
  }%`;
  let count = 0;
*/
  return (
    <div className="body _container">
      <Icon
        icon={data.vw <= 760 ? 'arrow_back' : 'arrow_back _hidden'}
        size={data.adaptiveFont(32, 24)}
        className="_icon"
      />
      <div
        className={
          data.vw <= 760
            ? 'body__info-blocks info-blocks _slider'
            : 'body__info-blocks info-blocks'
        }
      >
        {data.infoBlock.map((el, index) => {
          return <div className="info-block" key={index}></div>;
        })}
      </div>
      <Icon
        icon={data.vw <= 760 ? 'arrow_forward' : 'arrow_forward _hidden'}
        size={data.adaptiveFont(32, 24)}
        className="_icon"
      />
    </div>
  );
};
export default Body;
