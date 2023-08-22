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
    'https://script.google.com/macros/s/AKfycbyXLhcJ9hvenLxXJ9jGvwbgfYXyGs4H33fmFJ0UJeE_WhKssI_f_0BPNfJ2XO9ex_RW/exec?grains=true'
  );

  useEffect(() => {
    axios
      .request(grainsConfig)
      .then((response) => {
        data.setGrainsData(response.data);
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
          <Table datas={data.grainsData} setDatas={data.setGrainsData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Grains;
