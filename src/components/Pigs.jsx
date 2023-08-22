import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Pigs = () => {
  const data = useContext(MyContext);
  const pigsConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbyXLhcJ9hvenLxXJ9jGvwbgfYXyGs4H33fmFJ0UJeE_WhKssI_f_0BPNfJ2XO9ex_RW/exec?pigs=true'
  );

  useEffect(() => {
    axios
      .request(pigsConfig)
      .then((response) => {
        data.setPigsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.pigsData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container">
        <div className="product__category">
          <h1> Для свиней</h1>
          <Table datas={data.pigsData} setDatas={data.setPigsData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Pigs;
