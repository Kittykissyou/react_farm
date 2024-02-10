import { useContext } from 'react';
import { MyContext } from './Context';
import Icon from './Iconset';
const Table = ({ datas }) => {
  const data = useContext(MyContext);

  return (
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
              <td>Текущий остаток</td>
            )}
          </tr>
          {datas.data.map((el, index) => {
            return (
              <tr key={index}>
                {data.yearStat ? (
                  <td></td>
                ) : (
                  <td className="product__name">
                    {el.name}
                    <Icon
                      icon="favorite"
                      className={`_icon _favorite _in-table ${
                        data.favoriteProd.includes(el.name) ? 'isFavorite' : ''
                      }`}
                      onClick={() => {
                        data.toggleIsFavoriteHandle(datas, index);
                      }}
                    />
                  </td>
                )}

                <td>{el.price}</td>
                <td>{el.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
