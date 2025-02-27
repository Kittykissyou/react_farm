import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Pigs = () => {
  const data = useContext(MyContext);
  const pigsConfig = new data.Config(`${data.googleURL}?pigs=true`);

  useEffect(() => {
    axios
      .request(pigsConfig)
      .then((response) => {
        data.setPigsData(response.data);
        const birdsPostConfig = new data.PostConfig({
          mounth: data.nowDate,
          year: new Date().getFullYear(),
          birds: 0,
          grains: 0,
          inventory: 0,
          additives: 0,
          universal: 0,
          rabbits: 0,
          pigs: 1,
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

  return data.pigsData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container">
        <div className="product__category">
          <h1> Для свиней</h1>
          <Table datas={data.pigsData} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Pigs;
