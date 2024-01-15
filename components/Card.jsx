import React from 'react';

export default function Card({id, url, description, isVisible, isFinished, handleCardClick}) {
    const className = `${isVisible ? "card-show" : ""} ${isFinished ? "card-finished" : ""}`;

    const handleClick = () => {
      if (isVisible || isFinished) {
        return;
      }

      handleCardClick(id);
    };

    return (
      <li className={`card ${className}`} onClick={handleClick}>
        <img src={url} width="204" height="144" alt={description} />
      </li>
    );
}