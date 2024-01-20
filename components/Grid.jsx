import React from 'react';
import Card from './Card.jsx';
import {TIMEOUT} from '../settings.js';

export default function Grid({images, finishedItems, cardType, checkItems}) {
    const [visibleItems, setVisibleItems] = React.useState([]);

    const handleCardClick = (id) => {
      switch(visibleItems.length) {
        case 0:
          setVisibleItems([id]);
          break;
        case 1:
          setVisibleItems([...visibleItems, id]);
          checkItems(visibleItems[0], id);
          setTimeout(() => setVisibleItems([]), TIMEOUT);
          break;
        default:
          setVisibleItems([]);
      }
    };

    const cards = images.map((image) =>
      <Card 
        id={image.id} 
        url={image.url} 
        description={image.description} 
        key={image.id}
        isVisible={visibleItems.includes(image.id)} 
        isFinished={finishedItems.includes(image.id)}
        handleCardClick={handleCardClick}/>
    );

    return (
      <ul className={`cards cards-theme-${cardType}`}>
          {cards}
      </ul>
    );
}