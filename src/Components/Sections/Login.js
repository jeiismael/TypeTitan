import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "react-bootstrap";
import Register from "../Register.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "../../AuthContext.js";

const Login = ({ onLoginSuccess }) => {
  let apiLogin = "http://localhost/typetitan/src/Backend/login.php";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout } = useAuth();
  const [key, setKey] = useState("Login");



  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    let payload = {
      username: username,
      password: password,
    };
    axios.post(apiLogin, "auth=" + JSON.stringify(payload)).then((response) => {
      const responseData = response.data;
      if (responseData.status === 200) {
        onLoginSuccess(true, username);
    
        login();
        alert(response.data.message);
      } else {
        alert(response.data.message);
        
      }
    });
  };

  return (
    <>
      <div className="login-container">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-2"
        >
          <Tab eventKey="Login" title="Login">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                id="inputPassword"
                aria-describedby="passwordHelpBlock"
                required
              />
            </InputGroup>
            <Button
              type="submit"
              className="login-button"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </Tab>
          <Tab eventKey="Register" title="Register">
            <Register />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Login;