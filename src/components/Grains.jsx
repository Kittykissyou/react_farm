import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Grains = () => {
  const data = useContext(MyContext);
  const grainsConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbwQ63L_V4jN4QrlwyMkfwQI3BR9cr7GgaJC_hkJIpul3rAljwuK35QJs7iuL2VzgmKw/exec?grains=true'
  );

  useEffect(() => {
    axios
      .request(grainsConfig)
      .then((response) => {
        data.setGrainsData(response.data);
        const birdsPostConfig = new data.PostConfig({
          mounth: data.nowDate,
          year: new Date().getFullYear(),
          birds: 0,
          grains: 1,
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
  }, []);

  return data.grainsData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container">
        <div className="product__category">
          <h1> Зерно и крупа</h1>
          <Table datas={data.grainsData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Grains;
