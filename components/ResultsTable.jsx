import React from 'react';

export default function ResultsTable({ results, currentResult }) {
    const sortedResults = [...results,
    {
        name: 'Ваш результат',
        steps: currentResult
    }]
        .sort((a, b) => a.steps - b.steps);

    const tableRows = sortedResults.map(({ name, steps }, index) => (
        <tr key={index + 1} className={`result-table-row ${name === 'Ваш результат' ? 'active' : ''}`}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{steps}</td>
        </tr>
    ));

    return (
        <table className="result-table">
            <thead>
                <tr className="result-table-row">
                    <th>Место</th>
                    <th>Имя</th>
                    <th>Шаги</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}