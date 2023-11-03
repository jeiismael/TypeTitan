import React from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Levels from "../Sections/Levels";
import MiniLeaderBoards from "../Leaderboards/MiniLeaderBoards";
import Login from "../Sections/Login";
import Footer from "../Sections/Footer";
import Main from "../TypeBox/Main";
import Choose from "./../Images/Choose";
import LargeLeaderBoards from "../Leaderboards/LargeLeaderBoards";

import { Link } from "react-router-dom";
import Beginner from "./../Images/beginner.png";
import Intermediate from "./../Images/Intermediate.png";
import Expert from "./../Images/Expert.png";
import Image from "react-bootstrap/Image";

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
        <Choose />
        <div className="div2">
          <div className="levels">
            <br />
            <br />
            <br />
            <Link to="/beginner">
              <Image
                className="levelimage"
                src={Beginner}
                alt="Beginner Level"
              />
            </Link>
            <Link to="/intermediate">
              <Image
                className="levelimage"
                src={Intermediate}
                alt="Intermediate Level"
              />
            </Link>
            <Link to="/expert">
              <Image className="levelimage" src={Expert} alt="Expert Level" />
            </Link>
          </div>
        </div>
        <div className="div3">
          {isLoggedIn ? (
            <>
              <LargeLeaderBoards />
            </>
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
        </div>
        <div className="div4">{isLoggedIn ? [] : <MiniLeaderBoards />}</div>
      </div>
    </>
  );
};

export default Home;
