import Navbar from './Navbar';
import Footer from './Footer';
const Favorite = () => {
  return (
    <div>
      <Navbar />
      <div className="body _notPadding _container">
        <div className="product__category">
          <h1> Избранное</h1>
          <Table datas={data.oldBirdsData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Favorite;
