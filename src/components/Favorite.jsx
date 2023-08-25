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
    url: `https://script.google.com/macros/s/AKfycbytdp7dgYEi7RrZUYyY1YKhrEgKwPJfJB-BofyLJk0ywRfvtzRuaL7gDIWusLsuPkoR/exec?favorite={"product":${localStorage.getItem(
      'favorite'
    )}}`,
    headers: {},
  };

  useEffect(() => {
    console.log(data.favoriteProd);
    if (data.favoriteProd !== [] || data.favoriteProd !== '') {
      axios
        .request(config)
        .then((response) => {
          data.setGetFavoriteData(response.data);
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
