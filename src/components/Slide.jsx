import { useContext } from 'react';
import { MyContext } from './Context';

const Slide = ({ id }) => {
  const data = useContext(MyContext);

  return (
    <div className="info-block ">
      <a href={data.infoBlock[id].link}></a>
      <div className="block-content">
        <p>{data.infoBlock[id].name}</p>
      </div>
    </div>
  );
};
export default Slide;
