import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MyContext = createContext();

const Context = (props) => {
  const [oldBirdsData, setOldBirdsData] = useState(false);
  const [tinyBirdsData, setTinyBirdsData] = useState(false);
  const [additivesData, setAdditivesData] = useState(false);
  const [grainsData, setGrainsData] = useState(false);
  const [universalData, setUniversalData] = useState(false);
  const [rabbitsData, setRabbitsData] = useState(false);
  const [pigsData, setPigsData] = useState(false);
  const [cattleData, setCattleData] = useState(false);
  const [inventoryData, setInventoryData] = useState(false);
  const [universalAdditivesData, setUniversalAdditivesData] = useState(false);
  const [petsData, setPetsData] = useState(false);
  const [statisticData, setStatisticData] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [yearStat, setYearStat] = useState(false);
  const [showMounth, setShowMounth] = useState(false);
  const [mounthStat, setMounthStat] = useState(false);
  const [favoriteProd, setFavoriteProd] = useState(
    () => JSON.parse(localStorage.getItem('favorite')) || ''
  );
  const [getFavoriteData, setGetFavoriteData] = useState(false);
  const mounthToggleHandle = (mounth) => {
    const requestMounthStat = () => {
      const mounthConfig = new Config(
        //замена
        'https://script.google.com/macros/s/AKfycbyFXM08yGtFhSvw1c0h3WRB4iEbZnXJO4jbjC2mMMPjXgtz9pMPVICuP0Yo2zl-gIschQ/exec?mounthStat=true'
      );
      axios
        .request(mounthConfig)
        .then((response) => {
          setMounthStat({
            data: response.data.data.filter(
              (el) => mounth + '.' + String(yearStat.data[0].name) == el.name
            ),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (mounthStat) {
      setMounthStat(false);
      requestMounthStat();
    } else {
      setShowMounth(!showMounth);
      requestMounthStat();
    }
  };
  const yearToggleHandle = (year) => {
    setShowYear(!showYear);
    setMounthStat(false);
    showMounth ? setShowMounth(false) : {};
    if (!showYear) {
      const yearConfig = new Config(
        //замена
        'https://script.google.com/macros/s/AKfycbz33KHBrJZShidG0dWflHMJ5wzVLkT4HQx9mpE2ML-6aok7joTTIYbFgJw2OyJdluA9Sw/exec?yearStat=true'
      );
      axios
        .request(yearConfig)
        .then((response) => {
          setYearStat({
            data: response.data.data.filter((el) => el.name == year),
          });
        })

        .catch((error) => {
          console.log(error);
        });
    }
    if (showYear) {
      setYearStat(false);
    }
  };
  const toggleIsFavoriteHandle = (datas, id) => {
    if (
      JSON.parse(localStorage.getItem('favorite')).includes(datas.data[id].name)
    ) {
      setFavoriteProd(favoriteProd.filter((el) => el !== datas.data[id].name));
    }

    if (!favoriteProd.includes(datas.data[id].name)) {
      setFavoriteProd([...favoriteProd, datas.data[id].name]);
    }
  };

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favoriteProd));
  }, [favoriteProd]);

  const adaptiveFont = (pcSize, mobSize) => {
    let maxWidth = 1536;
    let addSize = pcSize - mobSize;
    maxWidth = maxWidth - 320;
    return mobSize + addSize * ((vw - 320) / maxWidth);
  };
  const mounth = [
    { name: 'Январь', number: '01' },
    { name: 'Февраль', number: '02' },
    { name: 'Март', number: '03' },
    { name: 'Апрель', number: '04' },
    { name: 'Май', number: '05' },
    { name: 'Июнь', number: '06' },
    { name: 'Июль', number: '07' },
    { name: 'Август', number: '08' },
    { name: 'Сентябрь', number: '09' },
    { name: 'Октябрь', number: '10' },
    { name: 'Ноябрь', number: '11' },
    { name: 'Декабрь', number: '12' },
  ];
  const infoBlock = [
    { name: 'Для птиц', link: '/birds' },
    { name: 'Зерно и крупы', link: '/grains' },
    { name: 'Универсальные', link: '/universal' },
    { name: 'Для кроликов', link: '/rabbits' },
    { name: 'Для свиней', link: '/pigs' },
    { name: 'Для КРС', link: '/cattle' },
    { name: 'Инвентарь', link: '/inventory' },
    { name: 'Добавки', link: '/additives' },
    { name: 'Для домашних животных', link: '/pets' },
  ];
  class Config {
    constructor(url) {
      this.method = 'get';
      this.maxBodyLength = Infinity;
      this.url = url;
      this.headers = {};
    }
  }
  class PostConfig {
    constructor(data) {
      this.method = 'post';
      this.maxBodyLength = Infinity;
      this.url =
        'https://script.google.com/macros/s/AKfycbxKbu7zfzGCuxYlqyCFg_w1mogYyCeK1mizYcqu2X-vRWkGXwMYuHNq0JsUFuJba7kwEw/exec';
      this.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
      this.data = data;
    }
  }
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

  const nowDate =
    String(new Date().getMonth() + 1).length == 1
      ? '0' +
        String(new Date().getMonth() + 1) +
        '.' +
        String(new Date().getFullYear())
      : String(new Date().getMonth() + 1) +
        '.' +
        String(new Date().getFullYear());

  const value = {
    adaptiveFont,
    Config,
    PostConfig,
    getPreferredColorScheme,
    schemeToggle,
    colorTheme,
    setColorTheme,
    infoBlock,
    oldBirdsData,
    setOldBirdsData,
    tinyBirdsData,
    setTinyBirdsData,
    additivesData,
    setAdditivesData,
    grainsData,
    setGrainsData,
    universalData,
    setUniversalData,
    rabbitsData,
    setRabbitsData,
    pigsData,
    setPigsData,
    cattleData,
    setCattleData,
    inventoryData,
    setInventoryData,
    universalAdditivesData,
    setUniversalAdditivesData,
    petsData,
    setPetsData,
    statisticData,
    setStatisticData,
    toggleIsFavoriteHandle,
    favoriteProd,
    getFavoriteData,
    setGetFavoriteData,
    showYear,
    setShowYear,
    yearToggleHandle,
    yearStat,
    mounth,
    mounthToggleHandle,
    mounthStat,
    showMounth,
    nowDate,
  };
  return (
    <MyContext.Provider value={value}> {props.children}</MyContext.Provider>
  );
};
export default Context;
