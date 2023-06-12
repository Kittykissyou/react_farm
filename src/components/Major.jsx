import { useContext, useEffect } from 'react';
import { MyContext } from './Context';
import Navbar from './Navbar';
import Body from './Body';

const Major = () => {
  const data = useContext(MyContext);

  useEffect(() => {
    //функция для адаптивных иконок
    const handleResize = (event) => {
      data.setVw(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    //

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data.colorTheme]);

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
      <Navbar />
      <Body />
    </div>
  );
};
export default Major;
