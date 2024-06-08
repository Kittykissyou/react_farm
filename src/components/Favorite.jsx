import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';

const Favorite = () => {
  const data = useContext(MyContext);

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://script.google.com/macros/s/AKfycbwQ63L_V4jN4QrlwyMkfwQI3BR9cr7GgaJC_hkJIpul3rAljwuK35QJs7iuL2VzgmKw/exec?favorite={"product":${localStorage.getItem(
      'favorite'
    )}}`,
    headers: {},
  };

  useEffect(() => {
    if (data.favoriteProd.length !== 0 || data.favoriteProd !== '') {
      axios
        .request(config)
        .then((response) => {
          data.setGetFavoriteData(response.data);
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
            pets: 0,
            favorite: 1,
          });
          axios.request(birdsPostConfig).catch((error) => {
            console.log(error);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return data.getFavoriteData ? (
    <div>
      <Navbar />
      <div className="body _notPadding _container">
        <div className="product__category">
          <h1> Избранное</h1>
          {data.getFavoriteData.data.length !== 0 ? (
            <Table datas={data.getFavoriteData} />
          ) : (
            <h1 className="without-favorite">Избранные товары отсутствуют</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};
export default Favorite;
