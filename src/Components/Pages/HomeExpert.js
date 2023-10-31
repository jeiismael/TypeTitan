import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Levels from "../Sections/Levels";
import MiniExpert from "../Leaderboards/MiniExpert";
import Login from "../Sections/Login";
import Footer from "../Sections/Footer";
import Main from "../TypeBox/Main";
import LargeExpert from "../Leaderboards/LargeExpert";
import TypeBoxBeginner from "../TypeBox/TypeBoxBeginner";
import TypeBoxIntermediate from "../TypeBox/TypeBoxIntermediate";
import TypeBoxExpert from "../TypeBox/TypeBoxExpert";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();

  const handleLoginSuccess = (loggedIn, user) => {
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      setUsername(user);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };
  return (
    <>
      <div className="parent">
        <div className="div1">
          <TypeBoxExpert username={username} />
        </div>
        <div className="div2">
          <Levels />
        </div>
        <div className="div3">
          {isLoggedIn ? (
            <>
              <LargeExpert />
            </>
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
        </div>
        <div className="div4">{isLoggedIn ? [] : <MiniExpert />}</div>
      </div>
    </>
  );
};

export default Home;
