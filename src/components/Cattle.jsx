import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Cattle = () => {
  const data = useContext(MyContext);
  const cattleConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbzdfARLD3XDDDXUwY0l2c3FHHyUcL1MU9zF8dKYzr-LI3R1dzVQI4S9Dc-fhCT2dRUL/exec?cattle=true'
  );

  useEffect(() => {
    axios
      .request(cattleConfig)
      .then((response) => {
        data.setCattleData(response.data);
        const birdsPostConfig = new data.PostConfig({
          mounth: data.nowDate,
          year: new Date().getFullYear(),
          birds: 0,
          grains: 0,
          inventory: 0,
          additives: 0,
          universal: 0,
          rabbits: 0,
          pigs: 0,
          cattle: 1,
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

  return data.cattleData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container ">
        <div className="product__category">
          <h1> Для крупного рогатого скота</h1>
          <Table datas={data.cattleData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Cattle;
