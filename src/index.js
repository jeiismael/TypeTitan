import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TypeBox from './Components/TypeBox';
import Header from './Components/Header.js';
import Timer from './Components/Timer';
import reportWebVitals from './reportWebVitals';
import HomePage from './Components/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiniLeaderBoards from './Components/MiniLeaderBoards';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HomePage />
    <MiniLeaderBoards />
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
