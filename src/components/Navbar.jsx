import React, { useContext } from 'react';
import { MyContext } from './Context';
import Icon from './Iconset';

export default function Navbar() {
  const data = useContext(MyContext);
  const langToggle = () => {
    data.setLang(!data.lang);
  };

  return (
    <div className="navbar _container">
      <p className="navbar__logo">CRYPTY</p>
      <div className="navbar__menu menu">
        <p className="menu__lang" onClick={langToggle}>
          {data.lang ? 'RU' : 'EN'}
        </p>

        <Icon
          icon="favorite"
          size={data.adaptiveFont(32, 24)}
          className="_icon _favorite"
        />
        <Icon
          icon="notifications"
          size={data.adaptiveFont(32, 24)}
          className="_icon"
          onClick={() => {
            console.log(data.currentTokenPrice.toFixed(2));
          }}
        />
        <Icon
          icon="calendar"
          size={data.adaptiveFont(32, 24)}
          className="_icon"
        />
        <Icon
          icon={data.colorTheme === 'dark' ? 'sun' : 'moon'}
          size={data.adaptiveFont(32, 24)}
          className="_icon"
          onClick={data.schemeToggle}
        />
      </div>
    </div>
  );
}
