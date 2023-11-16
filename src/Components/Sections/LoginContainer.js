import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import Login from "./Login.js";
import Register from "../Register.js";

const LoginContainer = ( { onLoginSuccess }) => {
  const [key, setKey] = useState("Login");

  return (
    <div className="login-container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-2"
      >
        <Tab eventKey="Login" title="Login">
          <Login onLoginSuccess={onLoginSuccess}/>
        </Tab>
        
        <Tab eventKey="Register" title="Register"><Register /></Tab>
      </Tabs>
      

    </div>
  );
};

export default LoginContainer;
