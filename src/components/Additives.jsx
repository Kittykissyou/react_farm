import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Additives = () => {
  const data = useContext(MyContext);
  const additivesConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbyXLhcJ9hvenLxXJ9jGvwbgfYXyGs4H33fmFJ0UJeE_WhKssI_f_0BPNfJ2XO9ex_RW/exec?universalAdditives=true'
  );

  useEffect(() => {
    axios
      .request(additivesConfig)
      .then((response) => {
        data.setAdditivesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.additivesData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container">
        <div className="product__category">
          <h1> Универсальные добавки</h1>
          <Table datas={data.additivesData} setDatas={data.setAdditivesData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Additives;
