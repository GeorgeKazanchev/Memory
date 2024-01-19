import React from 'react';
import GamePage from './GamePage.jsx';
import ResultsPage from './ResultsPage.jsx';
import { AppRoute } from '../settings.js';

export default function App({ images = [], results = [] }) {
  const [activePage, setActivePage] = React.useState(AppRoute.Game);
  const [result, setResult] = React.useState(0);

  const handleShowResults = (result) => {
    setResult(result);
    setActivePage(AppRoute.Results);
  };

  const handleStartNewGame = () => {
    setActivePage(AppRoute.Game);
  };

  const getPage = (activePage) => {
    switch (activePage) {
      case AppRoute.Game:
        return <GamePage
          images={images}
          onShowResults={handleShowResults} />
      case AppRoute.Results:
        return <ResultsPage
          results={results}
          currentResult={result}
          onStartNewGame={handleStartNewGame} />
      default:
        return null;
    }
  };

  return getPage(activePage);
}