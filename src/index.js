import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ResultCount from './components/ResultCount';

import MovieItemList from './components/MovieItemList';

import inceptionPoster from './assets/inceptionPoster.jpg';
import bohemianRharsody from './assets/bohemianRharsody.jpg';
import phantomOpera from './assets/phantomOpera.jpg';

import './index.css';

const filmsData = [
  {
    id: 0,
    filmaName: 'Inception',
    realizeYear: '2010',
    filmType: 'Action & Adventure',
    poster: inceptionPoster,
  },
  {
    id: 1,
    filmaName: 'Bohemian Rharsody',
    realizeYear: '2019',
    filmType: 'Drama, Biography, Music',
    poster: bohemianRharsody,
  },
  {
    id: 2,
    filmaName: 'Phantom of the Opera',
    realizeYear: '2005',
    filmType: 'Drama',
    poster: phantomOpera,
  },
  {
    id: 3,
    filmaName: 'Inception',
    realizeYear: '2010',
    filmType: 'Action & Adventure',
    poster: inceptionPoster,
  },
  {
    id: 4,
    filmaName: 'Bohemian Rharsody',
    realizeYear: '2019',
    filmType: 'Drama, Biography, Music',
    poster: bohemianRharsody,
  },
  {
    id: 5,
    filmaName: 'Phantom of the Opera',
    realizeYear: '2005',
    filmType: 'Drama',
    poster: phantomOpera,
  },
];

const Main = () => {
  return (
    <main>
      <Navigation />
      <ResultCount count="39" />
      <MovieItemList data={filmsData} />
    </main>
  );
};

const App = (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

const rootElement = document.getElementById('root');
ReactDOM.render(App, rootElement);
