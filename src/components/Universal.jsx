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
    'https://script.google.com/macros/s/AKfycbyXLhcJ9hvenLxXJ9jGvwbgfYXyGs4H33fmFJ0UJeE_WhKssI_f_0BPNfJ2XO9ex_RW/exec?universal=true'
  );

  useEffect(() => {
    axios
      .request(universalConfig)
      .then((response) => {
        data.setUniversalData(response.data);
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
