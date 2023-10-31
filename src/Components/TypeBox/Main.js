import TypeBoxBeginner from "./TypeBoxBeginner";
import TypeBoxIntermediate from "./TypeBoxIntermediate";
import TypeBoxExpert from "./TypeBoxExpert";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { useState } from "react";

const Main = () => {

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
        {/* <Routes>
            <Route path="play/beginner" element={<TypeBoxBeginner username={username}/>}/>
            <Route exact path="/play/intermediate" element={<TypeBoxIntermediate username={username}/>} />
            <Route exact path="/play/expert" element={<h1>crazy</h1>} />
            <Route exact path="/" element={<h1>stupid</h1>} />
        </Routes> */}
      </>
  );
};

export default Main;
