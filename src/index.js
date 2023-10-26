import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header.js';
import HomePage from './Components/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiniLeaderBoards from './Components/MiniLeaderBoards';
import Footer from './Components/Footer';
import LoginContainer from './Components/LoginContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <LoginContainer />
    <HomePage />
    <MiniLeaderBoards />
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
