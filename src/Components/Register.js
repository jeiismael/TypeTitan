import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  let api = "http://localhost/typetitan/src/Backend/accountsController.php";
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
     
    const handleRegister = (event) => {
        // axios.post('', { username, password })
        // .then((response) => {}
            // event.preventDefault();
 
        let payload = {
          "username" : username,
          "password" : password
        }

        // axios.post({
        //   method : 'POST',
        //   url : api,
        //   data : 'store=' + payload
        // })
        //   .then(response => {
        //     console.log(response)
        //   })

        axios.post(api, 'store=' + JSON.stringify(payload))
          .then(response => {
            console.log(response)
          })
    };

    const handleChangeTab = () => {

    }

    return ( 
        <>
        <div className='login-container'>
            <h2>Register</h2>
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
          placeholder='Password'
          type="password"
          value={password}
          onChange={handlePasswordChange}
          id="inputPassword"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Control
          placeholder='Confirm Password'
          type="password"
          value={password}
          onChange={handlePasswordChange}
          id="confirmPassword"
          aria-describedby="passwordHelpBlock"
        />

        <span className='loginButtons'>
            <Button variant='link' className="register-link" onClick={handleChangeTab}>Login</Button>
        </span>
        <span>
            <Button type="submit" className="login-button" onClick={handleRegister}>Register</Button>
        </span>
        </div>
        
        </>
     );
}
 
export default Login;