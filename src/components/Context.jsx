import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MyContext = createContext();

const Context = (props) => {
  const [vw, setVw] = useState(window.innerWidth);
  const [currentTokenPrice, setCurrentTokenPrice] = useState('');
  const [currentTokenBalance, setCurrentTokenBalance] = useState('');
  const [currentUSDTBalance, setCurrentUSDTBalance] = useState('');
  const [nextOperation, setNextOperation] = useState('');
  const myLimitBy = 70;

  useEffect(() => {
    let TPconfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.binance.com/api/v3/ticker/24hr',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .request(TPconfig)
      .then((response) => {
        setCurrentTokenPrice(
          Number(
            response.data.filter((el) => el.symbol == 'BTCUSDT')[0].bidPrice
          )
        );
      })

      .catch((error) => {
        console.log(error);
      });

    let TBconfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.binance.com/sapi/v1/capital/config/getall?timestamp=1687332404014&signature=0f7ef653115fdacc1754317a0fdad1dbd5046472313abf9011030e5d8f7f4b1b',
      headers: {
        'Content-Type': 'application/json',
        'X-MBX-APIKEY':
          'GptpQXcqzlVVO321uxW7aTElajdvbYR66OJ5X8ssozcomDBkrXgJKpUPICLWskCq',
      },
    };

    axios
      .request(TBconfig)
      .then((response) => {
        setCurrentTokenBalance(
          Number(response.data.filter((el) => el.coin == 'BTC')[0].free)
        );
        setCurrentUSDTBalance(
          Number(response.data.filter((el) => el.coin == 'USDT')[0].free)
        );
      })
      .catch((error) => {
        console.log(error);
      });

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
    currentTokenPrice,
    currentTokenBalance,
    currentUSDTBalance,
    myLimitBy,
  };
  return (
    <MyContext.Provider value={value}> {props.children}</MyContext.Provider>
  );
};
export default Context;
