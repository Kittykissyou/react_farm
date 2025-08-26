import { useContext } from 'react';
import { MyContext } from './Context';
import ModalFrame from './ModalFrame';
import Icon from './Iconset';
const Table = ({ datas }) => {
  const data = useContext(MyContext);

  return (
    <div>
      <ModalFrame />
      <div>
        <table>
          <tbody>
            <tr>
              {data.yearStat ? <td></td> : <td>Название</td>}
              {data.yearStat ? (
                data.mounthStat ? (
                  data.mounthStat.data.length !== 0 ? (
                    <td>Название категории</td>
                  ) : (
                    <td>ОШИБКА</td>
                  )
                ) : (
                  <td>Название категории</td>
                )
              ) : (
                <td>Актуальная цена</td>
              )}
              {data.yearStat ? (
                data.mounthStat ? (
                  data.mounthStat.data.length !== 0 ? (
                    <td>{`Количество посещений за ${data.mounthStat.data[0].name}`}</td>
                  ) : (
                    <td>{`данные за выбранный месяц - отсутствуют `}</td>
                  )
                ) : (
                  <td>{`Количество посещений в ${data.yearStat.data[0].name} году`}</td>
                )
              ) : (
                <td>Остаток Куйбышева</td>
              )}
            </tr>

            {datas.data.map((el, index) => {
              return (
                <tr key={index}>
                  {data.yearStat ? (
                    <td></td>
                  ) : (
                    <td
                      onClick={() => {
                        data.setNamePositionForModalFrame({
                          name: el.name,
                          description: el.description,
                          nutritional: el.nutritional,
                          compound: el.compound,
                        });
                        data.setActiveModalFrame(!data.activeModalFrame);
                      }}
                      className="product__name"
                    >
                      {el.name}
                      {/* <Icon
                      icon="favorite"
                      className={`_icon _favorite _in-table ${
                        data.favoriteProd.includes(el.name) ? 'isFavorite' : ''
                      }`}
                      onClick={() => {
                        data.toggleIsFavoriteHandle(datas, index);
                      }}
                    /> */}
                    </td>
                  )}

                  <td>{el.price}</td>
                  <td>{el.valueZasopka}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
