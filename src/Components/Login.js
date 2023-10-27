import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    let apiLogin = "http://localhost/typetitan/src/Backend/login.php"
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
     
      const handleLogin = () => {
        let payload = {
          username: username,
          password: password
        };
        axios.post(apiLogin, "auth=" + JSON.stringify(payload))
        .then((response) => {
          const responseData = response.data;
          if (responseData.status === 200) {
            setIsLoggedIn(true);
            alert(response.data.message);
          } else{
          alert(response.data.message);
          }
        })
      }

    

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
              <Button
                type="submit"
                className="login-button"
                onClick={handleLogin}
              >
                Log In
              </Button>
          </>
     )
}
 
export default Login;