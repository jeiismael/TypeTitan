import Header from "./Components/Header";
import LoginContainer from "./Components/LoginContainer";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import MiniLeaderBoards from "./Components/MiniLeaderBoards";
import Footer from "./Components/Footer";
import { useState } from "react";
import LargeLeaderBoards from "./Components/LargeLeaderBoards";


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
            <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}/>
            {isLoggedIn ? <LargeLeaderBoards /> : <LoginContainer onLoginSuccess={handleLoginSuccess} />}
            <HomePage />
            {isLoggedIn ? [] : <MiniLeaderBoards /> }
            <Footer></Footer>
        </>
     );
}
 
export default App;