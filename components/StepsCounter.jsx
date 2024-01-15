import React from 'react';

export default function StepsCounter({steps = 0}) {
    return (
      <div className="steps">Шаг {steps}</div>
    );
}