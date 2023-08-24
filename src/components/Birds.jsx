import axios from 'axios';
import Table from './Table';
import Navbar from './Navbar';
import Loader from './Loader';
import { useEffect, useContext } from 'react';
import { MyContext } from './Context';
import Footer from './Footer';
const Birds = () => {
  const data = useContext(MyContext);
  const oldBirdConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbyaedSlRvQN7OKLYimAg1i0iv2BXVGAl10WnGbZ4w8VNVQlxNPgN9ljztszJwotE1Cf/exec?oldBirds=true'
  );
  const tinyBirdConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbz4QrTnLsxJv8knlMhu8-T3L5yNvh2MrrPrfmjpHWW2nrtrAOqZaRUovRxLeZH6Srms/exec?tinyBirds=true'
  );
  const additivesConfig = new data.Config(
    'https://script.google.com/macros/s/AKfycbz4QrTnLsxJv8knlMhu8-T3L5yNvh2MrrPrfmjpHWW2nrtrAOqZaRUovRxLeZH6Srms/exec?additives=true'
  );

  useEffect(() => {
    axios
      .request(oldBirdConfig)
      .then((response) => {
        data.setOldBirdsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .request(tinyBirdConfig)
      .then((response) => {
        data.setTinyBirdsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .request(additivesConfig)
      .then((response) => {
        data.setAdditivesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data.oldBirdsData ? (
    data.tinyBirdsData ? (
      data.additivesData ? (
        <div>
          <Navbar />
          <div className="body _notPadding _container">
            <div className="product__category">
              <h1> Для взрослых птиц</h1>
              <Table datas={data.oldBirdsData} />
            </div>
            <div className="product__category">
              <h1> Молодняку птицы</h1>
              <Table datas={data.tinyBirdsData} />
            </div>
            <div className="product__category">
              <h1> Добавки для птицы</h1>
              <Table datas={data.additivesData} />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )
    ) : (
      <Loader />
    )
  ) : (
    <Loader />
  );
};
export default Birds;

/**
 *
 */
