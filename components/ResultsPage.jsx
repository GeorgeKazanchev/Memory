import React from 'react';
import ResultsTable from './ResultsTable.jsx';

export default function ResultsPage({ results, currentResult, onStartNewGame }) {
    return (
        <section className="result container">
            <h2>Лучшие результаты:</h2>
            <p>Вы завершили игру за <b>{currentResult} шагов</b>, так держать!</p>
            <ResultsTable results={results} currentResult={currentResult} />
            <p>Хотите попробовать ещё раз?</p>
            <button className="button result-button" type="button" onClick={onStartNewGame}>Новая игра</button>
        </section>
    );
}