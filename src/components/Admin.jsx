import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';
import Table from './Table';
import MounthStat from './MounthStat';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';

const Admin = () => {
  const data = useContext(MyContext);
  const statisticConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbzAPi-U-tYTixTG7E9L0okKOZUtVqzncQ-ndTmErZNM5nO2Gz7ABR67yTLo0ZsZPLLU/exec?years=true'
  );

  useEffect(() => {
    axios
      .request(statisticConfig)
      .then((response) => {
        data.setStatisticData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.statisticData ? (
    <div>
      <Navbar />
      <div className="body _container">
        <div className="body__info-blocks info-blocks _mounthLine">
          <div className="info-blocks__firstLine">
            <div className="info-block__side _left">
              {data.statisticData.data.map((el, index) => {
                if (index <= 1) {
                  return (
                    <div
                      key={index}
                      className={
                        data.yearStat
                          ? data.yearStat.data[index].name == el.name
                            ? 'info-block _active'
                            : 'info-block'
                          : 'info-block'
                      }
                      onClick={() => {
                        data.yearToggleHandle(el.name);
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
        {data.yearStat ? <MounthStat /> : <div></div>}
        {data.showYear ? (
          data.yearStat ? (
            data.showMounth ? (
              data.mounthStat ? (
                <Table datas={data.mounthStat} />
              ) : (
                <span className="loader"></span>
              )
            ) : (
              <Table datas={data.yearStat} />
            )
          ) : (
            <span className="loader"></span>
          )
        ) : (
          <h1></h1>
        )}
      </div>

      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Admin;
