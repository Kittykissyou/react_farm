import { useContext } from 'react';
import { MyContext } from './Context';
import Slider from './Slider';
import Slide from './Slide';

const Body = () => {
  const data = useContext(MyContext);

  return (
    <div className="body">
      <div className="body__info-blocks info-blocks ">
        {data.infoBlock.map((el, index) => {
          return <Slide key={index} id={index} />;
        })}
      </div>
      <Slider />
    </div>
  );
};
export default Body;
