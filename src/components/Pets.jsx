import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Pets = () => {
  const data = useContext(MyContext);
  const petsConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbyXLhcJ9hvenLxXJ9jGvwbgfYXyGs4H33fmFJ0UJeE_WhKssI_f_0BPNfJ2XO9ex_RW/exec?pets=true'
  );

  useEffect(() => {
    axios
      .request(petsConfig)
      .then((response) => {
        data.setPetsData(response.data);
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
          cattle: 0,
          pets: 1,
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

  return data.petsData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container ">
        <div className="product__category">
          <h1> Для домашних животных</h1>
          <Table datas={data.petsData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Pets;
