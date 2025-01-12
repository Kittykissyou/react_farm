import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Inventory = () => {
  const data = useContext(MyContext);
  const inventoryConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbw5EK1LSHY_3N-Pucr1NRNSbxZQMfaduoDkvqvs_4eUoQpUT80pcmYKoXA0coyp-ilY/exec?inventory=true'
  );

  useEffect(() => {
    axios
      .request(inventoryConfig)
      .then((response) => {
        data.setInventoryData(response.data);

        const birdsPostConfig = new data.PostConfig({
          mounth: data.nowDate,
          year: new Date().getFullYear(),
          birds: 0,
          grains: 0,
          inventory: 1,
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

  return data.inventoryData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container">
        <div className="product__category">
          <h1> Инвентарь</h1>
          <Table datas={data.inventoryData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Inventory;
