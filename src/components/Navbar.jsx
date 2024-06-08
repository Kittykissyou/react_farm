import React, { useContext } from 'react';
import { MyContext } from './Context';
import { useLocation } from 'react-router-dom';
import Icon from './Iconset';

export default function Navbar() {
  const data = useContext(MyContext);
  const location = useLocation();
  return (
    <div className="navbar _container">
      <div className="navbar__Rmenu lmenu">
        {location.pathname !== '/' ? (
          <div className="arrow-back-container">
            <a href="/">
              <Icon icon="arrow_back" className="_icon _arrow_back" />
            </a>
          </div>
        ) : (
          <></>
        )}
        <a className="navbar__logo" href="/">
          Комбикорма
        </a>
      </div>
      <div className="navbar__menu rmenu">
        {/* <a href="/favorite">
          <Icon icon="favorite" className="_icon _favorite" />
        </a> */}
        <Icon
          icon={data.colorTheme === 'dark' ? 'sun' : 'moon'}
          className="_icon _sun"
          onClick={data.schemeToggle}
        />
      </div>
    </div>
  );
}
