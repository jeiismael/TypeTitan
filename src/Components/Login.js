import { useState } from "react";
import { Tab, Tabs, InputGroup, Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
const Log = () => {
  let apiLogin = "http://localhost/typetitan/src/Backend/login.php";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(response);
    });
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
      <Form.Control
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      </InputGroup>
      <Button type="submit" className="login-button" onClick={handleLogin}>
        Log In
      </Button>
    </>
  );
};

export default Log;
