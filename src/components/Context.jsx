import { createContext, useState, useEffect } from 'react';

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
  const [favoriteProd, setFavoriteProd] = useState(
    () => JSON.parse(localStorage.getItem('favorite')) || ''
  );

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
    adaptiveFont,
    Config,
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
    toggleIsFavoriteHandle,
    favoriteProd,
  };
  return (
    <MyContext.Provider value={value}> {props.children}</MyContext.Provider>
  );
};
export default Context;
