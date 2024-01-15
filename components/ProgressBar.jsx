import React from 'react';

export default function ProgressBar({finishedItemsCount, totalItemsCount}) {
    const width = finishedItemsCount / totalItemsCount * 100;
    
    return (
      <React.Fragment>
        <div className="progress-wrapper">
          <div className="progress" style={{width: `${width}%`}}></div>
        </div>
        <p className="progress-description">Открыто 
          <span>{finishedItemsCount}</span> / <span>{totalItemsCount}</span></p>
      </React.Fragment>
    );
}