import { useContext } from 'react';
import { MyContext } from './Context';
import Slide from './Slide';

const Body = () => {
  const data = useContext(MyContext);

  return (
    <div className="body _container">
      <div className="body__info-blocks info-blocks">
        <div className="info-blocks__firstLine">
          <div className="info-block__side _left">
            {data.infoBlock.map((el, index) => {
              if (index <= 1) {
                return <Slide key={index} id={index} />;
              }
            })}
          </div>
          <div className="info-block__side _right">
            {data.infoBlock.map((el, index) => {
              if (index >= 2 && index <= 5) {
                return <Slide key={index} id={index} />;
              }
            })}
          </div>
        </div>
        <div className="info-blocks__secondLine">
          <div className="info-block__side _left">
            {data.infoBlock.map((el, index) => {
              if (index >= 6 && index <= 7) {
                return <Slide key={index} id={index} />;
              }
            })}
          </div>
          <div className="info-block__side _right">
            {data.infoBlock.map((el, index) => {
              if (index === 8) {
                return <Slide key={index} id={index} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
