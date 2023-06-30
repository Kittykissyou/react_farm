import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MyContext = createContext();

const Context = (props) => {
  const [vw, setVw] = useState(window.innerWidth);
  const [currentTokenPrice, setCurrentTokenPrice] = useState('');
  const [currentTokenBalance, setCurrentTokenBalance] = useState('');
  const [currentUSDTBalance, setCurrentUSDTBalance] = useState('');
  const [nextOperation, setNextOperation] = useState('');
  const [lastOpPrice, setLastOpPrice] = useState('');
  const [profitPercent, setProfitPercent] = useState('');
  const [dipPercent, setDipPercent] = useState(0);
  const [stopLoss, setStopLoss] = useState(0);
  const [dealPerDay, setDealPerDay] = useState(0);
  const [percentageDiff, setPercentageDiff] = useState(0);
  const [upwardTrend, setUpwardTrend] = useState(0);

  const myLimitBy = 70;

  let TBconfig = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8089/balances',
    headers: {
      headers: { 'Content-Type': 'application/json' },
    },
  };
  let PriceConfig = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8089/price',
    headers: {
      headers: { 'Content-Type': 'application/json' },
    },
  };
  const apiHandle = () => {
    axios
      .request(TBconfig)
      .then((response) => {
        setCurrentUSDTBalance(response.data.usdt.toFixed(2));
        setCurrentTokenBalance(response.data.btc.toFixed(2));
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .request(PriceConfig)
      .then((response) => {
        setCurrentTokenPrice(response.data.toFixed(2));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    //Запрос сведений с биржи
    apiHandle();
    setInterval(() => {
      apiHandle();
    }, 10000);
    //
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
    ['lastOpPrice', 'percentageDiff', 'stopLoss'],
    ['profit', 'dip', 'upwardTrend'],
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
    currentTokenPrice,
    currentTokenBalance,
    currentUSDTBalance,
    myLimitBy,
    nextOperation,
    lastOpPrice,
    profitPercent,
    dipPercent,
    stopLoss,
    dealPerDay,
    percentageDiff,
    upwardTrend,
  };
  return (
    <MyContext.Provider value={value}> {props.children}</MyContext.Provider>
  );
};
export default Context;
