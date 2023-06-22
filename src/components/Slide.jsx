import { useContext, useEffect } from 'react';
import { MyContext } from './Context';

const Slide = ({ id }) => {
  const data = useContext(MyContext);

  const contentHandleLeft = () => {
    if (id === 0) {
      return data.currentUSDTBalance;
    }
    if (id === 1) {
      return data.currentTokenPrice;
    }
  };
  const contentHandleTop = () => {
    if (id === 1) {
      return data.currentTokenBalance;
    }
  };
  const contentHandleBottom = () => {
    if (id === 1) {
      return data.myLimitBy;
    }
  };

  return (
    <div className="info-block _slide">
      <div className="block-content">
        <div className="block-content__left">{`${contentHandleLeft()}$`}</div>
        <div className="block-content__right">
          <div className="block-content__top">{contentHandleTop()}</div>
          <div className="block-content__bottom">{`${contentHandleBottom()}%`}</div>
        </div>
      </div>
    </div>
  );
};
export default Slide;

/*


          */
