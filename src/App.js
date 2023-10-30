import { AuthProvider } from "./AuthContext";
import LoginContainer from "./Components/Sections/LoginContainer";
import Main from "./Components/Main";
import TypeBoxIntermediate from "./Components/TypeBox/TypeBoxIntermediate";
import TypeBoxExpert from "./Components/TypeBox/TypeBoxExpert";
import Login from "./Components/Sections/Login";
import MiniLeaderBoards from "./Components/Leaderboards/MiniLeaderBoards";
import Footer from "./Components/Sections/Footer";
import { useState } from "react";
import LargeLeaderBoards from "./Components/Leaderboards/LargeLeaderBoards";
import Levels from "./Components/Sections/Levels";
import { Route, Routes } from "react-router-dom";
import LeaderPage from "./Components/Leaderboards/LeaderPage";
import Home from "./Components/Home";

import Header from "./Components/Sections/Header";
import { useAuth } from "./AuthContext";

const App = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const [username, setUsername] = useState();

  const handleLoginSuccess = (loggedIn, user) => {
    if (loggedIn) {
      setUsername(user);
    }
  };

  const handleLogout = () => {
    logout();
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
        
        <Route
          path="/"
          element={
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
                    <LargeLeaderBoards />
                  ) : (
                    <Login onLoginSuccess={handleLoginSuccess} />
                  )}
                </div>
                <div className="div4">
                  {isLoggedIn ? [] : <MiniLeaderBoards />}
                </div>
              </div>
            </>
          }
        ></Route>
        <Route
          path="/beginner"
          element={
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
                    <LargeLeaderBoards />
                  ) : (
                    <Login onLoginSuccess={handleLoginSuccess} />
                  )}
                </div>
                <div className="div4">
                  {isLoggedIn ? [] : <MiniLeaderBoards />}
                </div>
              </div>
            </>
          }
        ></Route>

        <Route
          path="/intermediate"
          element={
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
                    <LargeLeaderBoards />
                  ) : (
                    <Login onLoginSuccess={handleLoginSuccess} />
                  )}
                </div>
                <div className="div4">
                  {isLoggedIn ? [] : <MiniLeaderBoards />}
                </div>
              </div>
            </>
          }
        ></Route>
        <Route path="/leaderboards" element={<LeaderPage />} />
      </Routes>
      <Footer></Footer>
      </>
  );
};

export default App;
