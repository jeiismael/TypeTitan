import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";


const Register = () => {
  let api = "http://localhost/typetitan/src/Backend/accountsController.php";
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
      return;
    }
    let payload = {
      username: username,
      password: password,
    };

    axios.post(api, "store=" + JSON.stringify(payload)).then((response) => {
      alert(response.data.message);
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
          id="inputPassword"
          aria-describedby="passwordHelpBlock"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          id="confirmPassword"
          aria-describedby="passwordHelpBlock"
        />
      </InputGroup>
      <Button type="submit" className="login-button" onClick={handleRegister}>
        Register
      </Button>
    </>
  );
};

export default Register;
