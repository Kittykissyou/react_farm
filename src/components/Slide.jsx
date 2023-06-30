import { useContext, useEffect } from 'react';
import { MyContext } from './Context';

const Slide = ({ id }) => {
  const data = useContext(MyContext);
  // левый блок слайда
  const contentHandleLeft = () => {
    if (id === 0) {
      return `${data.currentUSDTBalance}$`;
    }
    if (id === 1) {
      return `${data.currentTokenPrice}$`;
    }
    if (id === 2) {
      return `${data.lastOpPrice}$`;
    }
    if (id === 3) {
      return `${data.profitPercent}%`;
    }
  };
  const textContentHandleLeft = () => {
    if (id === 0) {
      if (data.lang) {
        return 'Баланс';
      } else {
        return 'Balance';
      }
    }
    if (id === 1) {
      if (data.lang) {
        return 'Цена';
      } else {
        return 'Price';
      }
    }
    if (id === 2) {
      if (data.lang) {
        return 'Последняя цена';
      } else {
        return 'Last price';
      }
    }
    if (id === 3) {
      if (data.lang) {
        return 'Ожидаемая прибль';
      } else {
        return 'Expected Profit';
      }
    }
  };
  //
  // Правый верхний блок слайдера
  const contentHandleTop = () => {
    if (id === 0) {
      return data.nextOperetion;
    }
    if (id === 1) {
      return data.currentTokenBalance;
    }
    if (id === 2) {
      return `${data.percentageDiff}%`;
    }
    if (id === 3) {
      return `${data.dipPercent}%`;
    }
  };
  const textContentHandleTop = () => {
    if (id === 0) {
      if (data.lang) {
        return 'Следующая операция';
      } else {
        return 'Next operation';
      }
    }
    if (id === 1) {
      if (data.lang) {
        return 'Баланс токена';
      } else {
        return 'Token balance';
      }
    }
    if (id === 2) {
      if (data.lang) {
        return 'Разница в процентах';
      } else {
        return 'Percent difference';
      }
    }
    if (id === 3) {
      if (data.lang) {
        return 'Процент снижения';
      } else {
        return 'Percent dip';
      }
    }
  };
  //
  // Правый нижний блок слайдера
  const contentHandleBottom = () => {
    if (id === 0) {
      return data.dealPerDay;
    }
    if (id === 1) {
      return `${data.myLimitBy}%`;
    }
    if (id === 2) {
      return `${data.stopLoss}%`;
    }
    if (id === 3) {
      return `${data.upwardTrend}%`;
    }
  };
  const textContentHandleBottom = () => {
    if (id === 0) {
      if (data.lang) {
        return 'Сделок сегодня';
      } else {
        return 'Deal per day';
      }
    }
    if (id === 1) {
      if (data.lang) {
        return 'Управление рисками';
      } else {
        return 'Risk management';
      }
    }
    if (id === 2) {
      if (data.lang) {
        return 'Стоп-лосс';
      } else {
        return 'Stop-Loss';
      }
    }
    if (id === 3) {
      if (data.lang) {
        return 'Восходящий тренд';
      } else {
        return 'Upward trend';
      }
    }
  };
  //

  return (
    <div className="info-block _slide">
      <div className="block-content">
        <div className="block-content__left">
          <p className="block-content__left-top">{textContentHandleLeft()}</p>
          <p className="block-content__left-bottom">{contentHandleLeft()}</p>
        </div>
        <div className="block-content__right">
          <div className="block-content__top">
            <div className="block-content__top-top">
              {textContentHandleTop()}
            </div>
            <div className="block-content__top-bottom">
              {contentHandleTop()}
            </div>
          </div>
          <div className="block-content__bottom">
            <div className="block-content__bottom-top">
              {textContentHandleBottom()}
            </div>
            <div className="block-content__bottom-bottom">
              {contentHandleBottom()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slide;

/*


          */
