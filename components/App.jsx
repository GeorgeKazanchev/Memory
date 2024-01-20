import React from 'react';
import GamePage from './GamePage.jsx';
import ResultsPage from './ResultsPage.jsx';
import { AppRoute } from '../settings.js';
import { getImages } from '../data.js';
import InitialPage from './InitialPage.jsx';

export default function App({ results = [] }) {
  const [activePage, setActivePage] = React.useState(AppRoute.Initial);
  const [result, setResult] = React.useState(0);
  const [cardType, setCardType] = React.useState('cats');

  const images = getImages(cardType);

  const handleStartGame = (type) => {
    setCardType(type);
    setActivePage(AppRoute.Game);
  };

  const handleShowResults = (result) => {
    setResult(result);
    setActivePage(AppRoute.Results);
  };

  const handleResetGame = () => {
    setActivePage(AppRoute.Initial);
  };

  const getPage = (activePage) => {
    switch (activePage) {
      case AppRoute.Initial:
        return <InitialPage 
          onStartGame={handleStartGame}/>
      case AppRoute.Game:
        return <GamePage
          images={images}
          cardType={cardType}
          onShowResults={handleShowResults} />
      case AppRoute.Results:
        return <ResultsPage
          results={results}
          currentResult={result}
          onResetGame={handleResetGame} />
      default:
        return null;
    }
  };

  return getPage(activePage);
}