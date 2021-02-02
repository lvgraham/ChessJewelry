import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {console.log('index.js is working')}
  </React.StrictMode>,
  document.getElementById('root')
);
