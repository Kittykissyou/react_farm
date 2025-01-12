import { useContext } from 'react';
import { MyContext } from './Context';

export const ModalFrame = () => {
  const data = useContext(MyContext);
  return data.activeModalFrame ? (
    <div className="ModalFrameContainer">
      <div
        className="ModalFrameContainer _ModalFrame"
        onClick={() => data.setActiveModalFrame(!data.activeModalFrame)}
      ></div>
      {data.namePositionForModalFrame.description === '' ? (
        <div className="_innerFrame_notFound">
          <p>
            Скоро здесь будет карточка с детальным описанием товара, его состава
            и рекомендациями к применению.
          </p>
        </div>
      ) : (
        <div className="_innerFrame">
          <div className="_innerFrame_header">
            <h1> {data.namePositionForModalFrame.name}</h1>
          </div>
          <div className="_innerFrame_description">
            <p>{data.namePositionForModalFrame.description}</p>
          </div>
          <div className="_innerFrame_nutritional">
            <p>
              <b>Пищевая ценность: </b>
              {data.namePositionForModalFrame.nutritional}
            </p>
          </div>
          <div className="_innerFrame_compound">
            <p>
              <b>Состав: </b> {data.namePositionForModalFrame.compound}
            </p>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div></div>
  );
};
export default ModalFrame;
