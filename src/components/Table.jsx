import { useContext } from 'react';
import { MyContext } from './Context';
import Icon from './Iconset';
const Table = ({ datas, setDatas }) => {
  const data = useContext(MyContext);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Название</td>
            <td>Актуальная цена</td>
            <td>Текущий остаток</td>
          </tr>
          {datas.data.map((el, index) => {
            return (
              <tr key={index}>
                <td className="product__name">
                  {el.name}
                  <Icon
                    icon="favorite"
                    className={`_icon _favorite _in-table ${
                      el.isFavorite ? 'isFavorite' : ''
                    }`}
                    onClick={() => {
                      data.toggleIsFavoriteHandle(datas, setDatas, index);
                    }}
                  />
                </td>
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
