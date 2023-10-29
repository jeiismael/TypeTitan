import Header from "./Components/Header";
import LoginContainer from "./Components/LoginContainer";
import Main from "./Components/Main";
import TypeBox from "./Components/TypeBox";
import Login from "./Components/Login";
import MiniLeaderBoards from "./Components/MiniLeaderBoards";
import Footer from "./Components/Footer";
import { useState } from "react";
import LargeLeaderBoards from "./Components/LargeLeaderBoards";
import Levels from "./Components/Levels";
import { Route, Routes } from "react-router-dom";
import LeaderPage from "./Components/LeaderPage";
import Home from "./Components/Home";


const App = () => {
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
        setUsername('');
      };
  
    return ( 
        <>
        {/* <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/leaderboards" element={<LeaderPage />} />
          </Routes> */}
            
            <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}/>
            <div className="parent">
              <div className="div1">
                <TypeBox username={username}></TypeBox>
              </div>
              <div className="div2">
                <Levels />
              </div>
              <div className="div3">
                {isLoggedIn ? <><LargeLeaderBoards /></> : <Login onLoginSuccess={handleLoginSuccess}/>}
              </div>
                <div className="div4">{isLoggedIn ? [] : <MiniLeaderBoards /> }
              </div>
            </div>
            <Footer></Footer>
            
        </>
     );
}
 
export default App;