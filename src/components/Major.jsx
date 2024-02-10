import { useContext } from 'react';
import { MyContext } from './Context';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

const Major = () => {
  const data = useContext(MyContext);
  const location = useLocation();

  if (localStorage.getItem('color')) {
    document.documentElement.setAttribute(
      //Применяем "сохраненную" тему
      'data-color-scheme',
      localStorage.getItem('color')
    );
  } else {
    document.documentElement.setAttribute(
      //запускаем по умолчанию цветовую тему как в ОС
      'data-color-scheme',
      data.getPreferredColorScheme()
    );
  }

  return (
    <div>
      {location.pathname !== '/' ? (
        <Outlet />
      ) : (
        <div>
          <Navbar />
          <Body />
          <Footer />
        </div>
      )}
    </div>
  );
};
export default Major;
