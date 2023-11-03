import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Sections/Header";
import Footer from "./Components/Sections/Footer";
import Login from "./Components/Sections/Login"
import LeaderPage from "./Components/Leaderboards/LeaderPage";
import Home from "./Components/Pages/Home";
import HomeBeginner from "./Components/Pages/HomeBeginner";
import HomeIntermediate from "./Components/Pages/HomeIntermediate";
import HomeExpert from "./Components/Pages/HomeExpert";
import TypeBoxBegginer from "./Components/TypeBox/TypeBoxBeginner";
import { AuthProvider, useAuth } from "./AuthContext";

const App = () => {
  
  const [username, setUsername] = useState();
  const { login, isLoggedIn } = useAuth();

  const handleLoginSuccess = (loggedIn, user) => {
    login();
    setUsername(user);
    console.log(isLoggedIn);
    if (loggedIn) {
      setUsername(user);
      console.log('asd');
      console.log(isLoggedIn);
    }
  };

  const handleLogout = () => {
    setUsername("");
  };

  return (
    <>
    <AuthProvider>
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={handleLoginSuccess}
        onLogout={handleLogout}
        
      />
      <Routes>
        <Route exact path="/leaderboards" element={<LeaderPage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/beginner" element={<HomeBeginner username={username} />} /> 
        <Route exact path="/intermediate" element={<HomeIntermediate username={username} />} />
        <Route exact path="/expert" element={<HomeExpert username={username} />} />
      </Routes>
      </AuthProvider>
      <Footer />
    </>
  );
};

export default App;