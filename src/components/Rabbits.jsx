import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Rabbits = () => {
  const data = useContext(MyContext);
  const rabbitsConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbzt6liC55xYUSI297-DOKqYAJkLr8qmuDOinrcNg_Bzx4Qyx6M5RepL7JhXVXEDV2ef/exec?rabbits=true'
  );

  useEffect(() => {
    axios
      .request(rabbitsConfig)
      .then((response) => {
        data.setRabbitsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.rabbitsData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container ">
        <div className="product__category">
          <h1> Для кроликов</h1>
          <Table datas={data.rabbitsData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Rabbits;
