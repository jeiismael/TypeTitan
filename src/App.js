// App.js
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Sections/Header";
import Footer from "./Components/Sections/Footer";
import LeaderPage from "./Components/Leaderboards/LeaderPage";
import Home from "./Components/Pages/Home";
import HomeBeginner from "./Components/Pages/HomeBeginner";
import HomeIntermediate from "./Components/Pages/HomeIntermediate";
import HomeExpert from "./Components/Pages/HomeExpert";
import TypeBoxBegginer from "./Components/TypeBox/TypeBoxBeginner";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();

  const handleLoginSuccess = (loggedIn, user) => {
    setIsLoggedIn(loggedIn);
    console.log(user);
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
      <Header
        isLoggedIn={isLoggedIn}
        username={username}
        onLogout={handleLogout}
      />
      <Routes>
        <Route exact path="/leaderboards" element={<LeaderPage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/beginner" element={<HomeBeginner username={username} />} /> 
        <Route exact path="/intermediate" element={<HomeIntermediate username={username} />} />
        <Route exact path="/expert" element={<HomeExpert username={username} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
