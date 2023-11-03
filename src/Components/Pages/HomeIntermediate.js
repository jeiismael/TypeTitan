import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Levels from "../Sections/Levels";
import Login from "../Sections/Login";
import LargeIntermediate from "../Leaderboards/LargeIntermediate";
import TypeBoxIntermediate from "../TypeBox/TypeBoxIntermediate";
import MiniIntermediate from "./../Leaderboards/MiniIntermediate";

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
          <TypeBoxIntermediate username={username} />
        </div>
        <div className="div2">
          <Levels />
        </div>
        <div className="div3">
          {isLoggedIn ? (
            <>
              <LargeIntermediate />
            </>
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
        </div>
        <div className="div4">{isLoggedIn ? [] : <MiniIntermediate />}</div>
      </div>
    </>
  );
};

export default Home;
