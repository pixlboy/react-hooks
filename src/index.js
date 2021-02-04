import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StarRating from './StarRating';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App name="Rachit" />
    <h2>We rate you : <StarRating totalStars={10}></StarRating></h2>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
