import { createContext, useState, useEffect } from 'react';
/*
const { Spot } = require('@binance/connector');
const apiKey =
  'GptpQXcqzlVVO321uxW7aTElajdvbYR66OJ5X8ssozcomDBkrXgJKpUPICLWskCq';
const apiSecret =
  '45MDzJhUB24j9txoDzALsyR38PtQYXGVFp7I7iKc9nP7AbmcP5qYokxTXXy3X5Cg';
const client = new Spot(apiKey, apiSecret);
*/
export const MyContext = createContext();

const Context = (props) => {
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    //функция для адаптивных иконок
    const handleResize = (event) => {
      setVw(event.target.innerWidth);
    };

    //
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const adaptiveFont = (pcSize, mobSize) => {
    let maxWidth = 1536;
    let addSize = pcSize - mobSize;
    maxWidth = maxWidth - 320;
    return mobSize + addSize * ((vw - 320) / maxWidth);
  };
  const [lang, setLang] = useState(true);
  const infoBlock = [
    ['currentBalance', 'nextOperation', 'dealToday'],
    ['currentTokenPrice', 'currentTokenBalance', 'myLimitBuy'],
    ['lastOpPrice', 'percentageDiff'],
    ['profit', 'dip', 'upwardTrend', 'stopLoss'],
  ];
  // ниже функция опеределения темной или светлой темы
  const getPreferredColorScheme = () => {
    const darkQuery = '(prefers-color-scheme: dark)';
    const darkMQL = window.matchMedia(darkQuery);

    if (darkMQL.matches) {
      return 'dark';
    }
    return 'default';
  };
  const [colorTheme, setColorTheme] = useState(getPreferredColorScheme);

  const schemeToggle = () => {
    const colorScheme =
      document.documentElement.getAttribute('data-color-scheme');
    document.documentElement.setAttribute(
      'data-color-scheme',
      colorScheme === 'default' ? 'dark' : 'default'
    );
    localStorage.setItem(
      'color',
      document.documentElement.getAttribute('data-color-scheme')
    );
    setColorTheme(localStorage.getItem('color'));
  };

  const value = {
    vw,
    setVw,
    adaptiveFont,
    lang,
    setLang,
    getPreferredColorScheme,
    schemeToggle,
    colorTheme,
    setColorTheme,
    infoBlock,
  };
  return (
    <MyContext.Provider value={value}> {props.children}</MyContext.Provider>
  );
};
export default Context;
