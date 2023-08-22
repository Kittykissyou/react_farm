import React, { useContext } from 'react';
import { MyContext } from './Context';
import Icon from './Iconset';

export default function Navbar() {
  const data = useContext(MyContext);

  return (
    <div className="navbar _container">
      <a className="navbar__logo" href="/">
        Комбикорма
      </a>
      <div className="navbar__menu menu">
        <a href="/favorite">
          <Icon icon="favorite" className="_icon _favorite" />
        </a>

        <Icon
          icon={data.colorTheme === 'dark' ? 'sun' : 'moon'}
          className="_icon _sun"
          onClick={data.schemeToggle}
        />
      </div>
    </div>
  );
}
