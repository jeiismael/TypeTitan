import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import Login from "./Login.js";
import Register from "./Register.js";

const LoginContainer = () => {
  const [key, setKey] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="login-container">
      {isLoggedIn ? (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-2"
      >
        <Tab eventKey="Login" title="Login"><Login /></Tab>
        
        <Tab eventKey="Register" title="Register"><Register /></Tab>
      </Tabs>
      ) : []
}
    </div>
  );
};

export default LoginContainer;
