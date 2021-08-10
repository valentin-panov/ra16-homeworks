import './App.css';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import AdvBLock from './components/AdvBlock/AdvBlock';
import Widgets from './components/Widgets/Widgets';
import genID from '../src/utils/genID';

const data = {
  headerTabs: [
    {
      title: 'Сейчас в СМИ',
      link: '#',
      id: genID(),
      selected: true,
      news: [
        {
          title: 'Путин упростил получение автомобильных номеров',
          img: '#',
          link: '#',
          id: genID(),
        },
        {
          title: 'В команде Зеленского раскрыти план реформ на Украине',
          img: '#',
          link: '#',
          id: genID(),
        },
        {
          title:
            'Турпомощь прокомментировала гибель дестяков россиян в Анатлье',
          img: '#',
          link: '#',
          id: genID(),
        },
        {
          title: 'Суд закрыл дело Демпартии США против России',
          img: '#',
          link: '#',
          id: genID(),
        },
        {
          title: 'На украине призвали создать ракеты для удара по Москве',
          img: '#',
          link: '#',
          id: genID(),
        },
      ],
    },
    { title: 'в Германии', link: '#', id: genID(), selected: false },
    { title: 'Рекомендуем', link: '#', id: genID(), selected: false },
  ],
  searchCategories: [
    { title: 'Видео', link: '#', id: genID(), selected: true },
    { title: 'Картинки', link: '#', id: genID(), selected: false },
    { title: 'Новости', link: '#', id: genID(), selected: false },
    { title: 'Карты', link: '#', id: genID(), selected: false },
    { title: 'Маркет', link: '#', id: genID(), selected: false },
    { title: 'Переводчик', link: '#', id: genID(), selected: false },
    { title: 'Эфир', link: '#', id: genID(), selected: false },
    { title: 'Ещё', link: '#', id: genID(), selected: false },
  ],
  currencies: [
    { currency: 'USD MOEX', rate: '63,52', id: genID(), move: '+0.14' },
    { currency: 'EUR MOEX', rate: '70,86', id: genID(), move: '+0.09' },
    { currency: 'НЕФТЬ', rate: '64,90', id: genID(), move: '+1.63%' },
    { currency: '...', id: genID() },
  ],
  searchLogo:
    'https://w0.pngwave.com/png/512/706/yandex-png-clip-art-thumbnail.png',
  searchSubstring: ['Найдётся всё. Например, ', 'кастомная фраза'],
  AdvBLock: {
    bannerLink: '#',
    bannerImg: '#',
    bannerText: 'bannerText',
  },
  weather: {
    title: 'Погода',
    actual: { status: 'rainy', temp: '+17' },
    forecast: { close: 'Утром +17', far: 'днём +20' },
  },
  maps: {
    title: 'Карта Германии',
    item: 'Расписание',
  },
  online: {
    title: 'Эфир',
    items: [
      { name: 'Управление как искусство', channel: 'Успех', id: genID() },
      { name: 'Ночь. Мир в это время', channel: 'earthTV', id: genID() },
      { name: 'Андрей Возн...', channel: 'Совершенно секретно', id: genID() },
    ],
  },
  popular: {
    title: 'Посещаемое',
    items: [
      { theme: 'Недвижимость', name: 'о сталинках', id: genID() },
      { theme: 'Маркет', name: 'люстры и светильники', id: genID() },
      { theme: 'Авто.ру', name: 'привод 4х4 до 500 000', id: genID() },
    ],
  },
  tvSheet: {
    title: 'Телепрограмма',
    items: [
      {
        time: '02:00',
        channel: 'ТНТ International',
        name: 'ТНТ. Best',
        id: genID(),
      },
      {
        time: '02:15',
        channel: 'Карусель INT',
        name: 'Джинглики',
        id: genID(),
      },
      {
        time: '02:25',
        channel: 'Первый',
        name: 'Наедине со всеми',
        id: genID(),
      },
    ],
  },
};

function App() {
  const onClick = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <div className='App'>
      <Header
        headerTabs={data.headerTabs}
        currencies={data.currencies}
        onClick={onClick}
      />
      <SearchForm
        searchLogo={data.searchLogo}
        searchCategories={data.searchCategories}
        searchSubstring={data.searchSubstring}
        onClick={onClick}
      />
      <AdvBLock props={data.AdvBLock} />
      <Widgets
        weather={data.weather}
        maps={data.maps}
        online={data.online}
        popular={data.popular}
        tvSheet={data.tvSheet}
      />
    </div>
  );
}

export default App;
