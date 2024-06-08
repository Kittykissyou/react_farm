import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';

import Footer from './Footer';
const Birds = () => {
  const data = useContext(MyContext);
  const oldBirdConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbwQ63L_V4jN4QrlwyMkfwQI3BR9cr7GgaJC_hkJIpul3rAljwuK35QJs7iuL2VzgmKw/exec?oldBirds=true'
  );
  const tinyBirdConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbwQ63L_V4jN4QrlwyMkfwQI3BR9cr7GgaJC_hkJIpul3rAljwuK35QJs7iuL2VzgmKw/exec?tinyBirds=true'
  );
  const additivesConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbwQ63L_V4jN4QrlwyMkfwQI3BR9cr7GgaJC_hkJIpul3rAljwuK35QJs7iuL2VzgmKw/exec?additives=true'
  );

  useEffect(() => {
    axios
      .request(oldBirdConfig)
      .then((response) => {
        data.setOldBirdsData(response.data);
        const birdsPostConfig = new data.PostConfig({
          mounth: data.nowDate,
          year: new Date().getFullYear(),
          birds: 1,
          grains: 0,
          inventory: 0,
          additives: 0,
          universal: 0,
          rabbits: 0,
          pigs: 0,
          cattle: 0,
          pets: 0,
          favorite: 0,
        });
        axios.request(birdsPostConfig).catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .request(tinyBirdConfig)
      .then((response) => {
        data.setTinyBirdsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .request(additivesConfig)
      .then((response) => {
        data.setAdditivesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.oldBirdsData ? (
    data.tinyBirdsData ? (
      data.additivesData ? (
        <div>
          <Navbar />
          <div className="body _notPadding _container">
            <div className="product__category">
              <h1> Для взрослых птиц</h1>
              <Table datas={data.oldBirdsData} />
            </div>
            <div className="product__category">
              <h1> Для молодняка</h1>
              <Table datas={data.tinyBirdsData} />
            </div>
            <div className="product__category">
              <h1> Добавки для птицы</h1>
              <Table datas={data.additivesData} />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )
    ) : (
      <Loader />
    )
  ) : (
    <Loader />
  );
};
export default Birds;

/**
 *
 */
