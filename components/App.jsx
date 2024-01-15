import React from 'react';
import ProgressBar from './ProgressBar.jsx';
import StepsCounter from './StepsCounter.jsx';
import Grid from './Grid.jsx';
import Modal from './Modal.jsx';
import { useGame } from '../game-logic.jsx';

export default function App({images = []}) {
    const {
      steps,
      finishedItems,
      isWin,
      checkItems,
      handleReset
    } = useGame(images);

    return (
      <React.Fragment>
        <section className="game container">
          <ProgressBar 
            finishedItemsCount={finishedItems.length / 2} 
            totalItemsCount={images.length / 2} />
          <StepsCounter 
            steps={steps} />
          <Grid 
            images={images}
            finishedItems={finishedItems} 
            checkItems={checkItems} />
        </section>
        {isWin && (
          <Modal>
            <h3 className="modal-caption">Победа!</h3>
            <p className="modal-description">Вы собрали все пары за {steps} шагов</p>
            <button className="button modal-button" type="button" onClick={handleReset}>Новая игра</button>
          </Modal>
        )}
      </React.Fragment>
    );
}