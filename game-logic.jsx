import React from 'react';

export const useGame = (images) => {
  const [steps, setSteps] = React.useState(0);
  const [finishedItems, setFinishedItems] = React.useState([]);

  const checkItems = (firstItemId, secondItemId) => {
    const firstItem = images.find((item) => item.id === firstItemId);
    const secondItem = images.find((item) => item.id === secondItemId);

    if (firstItem.url === secondItem.url) {
      setFinishedItems([...finishedItems, firstItemId, secondItemId]);
    }

    setSteps((steps) => steps + 1);
  }

  const isWin = finishedItems.length === images.length;

  return {
    steps,
    finishedItems,
    isWin,
    checkItems
  };
}