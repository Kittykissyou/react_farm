import { useContext } from 'react';
import { MyContext } from './Context';
import Slider from './Slider';

const Body = () => {
  const data = useContext(MyContext);

  return (
    <div className="body">
      <div className="body__info-blocks info-blocks ">
        {data.infoBlock.map((el, index) => {
          return <div className="info-block" key={index}></div>;
        })}
      </div>
      <Slider />
    </div>
  );
};
export default Body;
