import { useContext } from 'react';
import { MyContext } from './Context';
const MounthStat = () => {
  const data = useContext(MyContext);
  return (
    <div className="body__info-blocks info-blocks _mounthLine">
      <div className="info-blocks__firstLine _center ">
        <div className="info-block__side _center _mounthLine">
          {data.mounth.map((el, index) => {
            if (index <= 5) {
              return (
                <div
                  key={index}
                  className={'info-block _center'}
                  onClick={() => {
                    data.mounthToggleHandle(el.number);
                  }}
                >
                  <div className="block-content">
                    <p>{el.name}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="info-blocks__firstLine _center ">
        <div className="info-block__side _center _mounthLine ">
          {data.mounth.map((el, index) => {
            if (index >= 6 && index <= 11) {
              return (
                <div
                  key={index}
                  className={'info-block _center'}
                  onClick={() => {
                    data.mounthToggleHandle(el.number);
                  }}
                >
                  <div className="block-content">
                    <p>{el.name}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default MounthStat;
