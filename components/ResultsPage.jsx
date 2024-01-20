import React from 'react';
import getDeclension from '@dubaua/get-declension';
import ResultsTable from './ResultsTable.jsx';

export default function ResultsPage({ results, currentResult, onResetGame }) {
    const currentResultDeclension = getDeclension({
        count: currentResult,
        one: 'шаг',
        few: 'шага',
        many: 'шагов'
      });
    
    return (
        <section className="result container">
            <h2>Лучшие результаты:</h2>
            <p>Вы завершили игру за <b>{currentResultDeclension}</b>, так держать!</p>
            <ResultsTable results={results} currentResult={currentResult} />
            <p>Хотите попробовать ещё раз?</p>
            <button className="button result-button" type="button" onClick={onResetGame}>Новая игра</button>
        </section>
    );
}