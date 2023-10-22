import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Login = () => {
  let api = "http://localhost/typetitan/src/Backend/accountsController.php";
  let apiLogin = "http://localhost/typetitan/src/Backend/login.php"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };


// Registration
  const handleRegister = (event) => {
    if (password !== confirmPassword) {
      event.preventDefault();
      alert("Passwords do not match!");
    }
    let payload = {
      username: username,
      password: password,
    };

    axios.post(api, "store=" + JSON.stringify(payload)).then((response) => {
      console.log(response);
    });
  };

  const handleLogin = () => {
    let payload = {
      username: username,
      password: password
    };
    axios.post(apiLogin, "auth=" + JSON.stringify(payload))
    .then((response) => {
      console.log(response);
    })
  }


  const [key, setKey] = useState('Login');

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
              />
            </InputGroup>
            <Form.Control
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              id="inputPassword"
              aria-describedby="passwordHelpBlock"
            />

            <span>
              <Button
                type="submit"
                className="login-button"
                onClick={handleLogin}
              >
                Log In
              </Button>
            </span>
          </Tab>
          <Tab eventKey="Register" title="Register">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Control
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              id="inputPassword"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Control
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              id="confirmPassword"
              aria-describedby="passwordHelpBlock"
            />
            <span>
              <Button
                type="submit"
                className="login-button"
                onClick={handleRegister}
              >
                Register
              </Button>
            </span>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Login;
