import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Universal = () => {
  const data = useContext(MyContext);
  const universalConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbzdfARLD3XDDDXUwY0l2c3FHHyUcL1MU9zF8dKYzr-LI3R1dzVQI4S9Dc-fhCT2dRUL/exec?universal=true'
  );

  useEffect(() => {
    axios
      .request(universalConfig)
      .then((response) => {
        data.setUniversalData(response.data);
        const birdsPostConfig = new data.PostConfig({
          mounth: data.nowDate,
          year: new Date().getFullYear(),
          birds: 0,
          grains: 0,
          inventory: 0,
          additives: 0,
          universal: 1,
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

  return data.universalData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container ">
        <div className="product__category">
          <h1> Универсальные комбикорма</h1>
          <Table datas={data.universalData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Universal;
