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
    'https://script.google.com/macros/s/AKfycbyXLhcJ9hvenLxXJ9jGvwbgfYXyGs4H33fmFJ0UJeE_WhKssI_f_0BPNfJ2XO9ex_RW/exec?cattle=true'
  );

  useEffect(() => {
    axios
      .request(cattleConfig)
      .then((response) => {
        data.setCattleData(response.data);
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
