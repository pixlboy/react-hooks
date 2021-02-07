import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateHook from './StateHook';
import StarRating from './StarRating';
import ColorSound from './ColorSound';
import UserList from './UserList';
import reportWebVitals from './reportWebVitals';
import UserActions from './UserActions';
import TreeList from './TreeList';
import GitProfile from './GitProfile';

const TreesContext = createContext();

export const useTrees = () => {
  return useContext(TreesContext);
}

const trees = [
  { "id" : "1", "name" : "Neem" },
  { "id" : "2", "name" : "Peepal" },
  { "id" : "3", "name" : "Banyan" },
  { "id" : "4", "name" : "Alpine" },
]

ReactDOM.render(
  <TreesContext.Provider value={{trees}}>
    <TreeList></TreeList>
    <GitProfile login="rach8garg"></GitProfile>
    <StateHook name="Rachit" />
    <h2>We rate you : <StarRating totalStars={10}></StarRating></h2>
    <UserActions></UserActions>
    <ColorSound></ColorSound>
    <UserList></UserList>
  </TreesContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
