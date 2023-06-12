import { createContext, useState } from 'react';
export const MyContext = createContext();

const Context = (props) => {
  const [vw, setVw] = useState(window.innerWidth);
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
