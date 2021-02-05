import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StarRating from './StarRating';
import UserList from './UserList';
import reportWebVitals from './reportWebVitals';
import UserActions from './UserActions';

ReactDOM.render(
  <React.StrictMode>
    <App name="Rachit" />
    <h2>We rate you : <StarRating totalStars={10}></StarRating></h2>
    <UserActions></UserActions>
    <UserList></UserList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
