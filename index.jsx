import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { images, results } from './data.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App images={images} results={results}/>);