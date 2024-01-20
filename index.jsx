import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { results } from './data.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App results={results}/>);