import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
     
    const handleLogin = (event) => {
        // axios.post('', { username, password })
        // .then((response) => {}
            event.preventDefault();
            console.log('Login Succesful');
        
    };

    const handleChangeTab = () => {

    }

    return ( 
        <>
        <div className='login-container'>
            <h2>Sign in</h2>
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
        <span className='loginButtons'>
            <Button variant='link' className="register-link" onClick={handleChangeTab}>Register</Button>
        </span>
        <span>
            <Button type="submit" className="login-button" onClick={handleLogin}>Log In</Button>
        </span>
        </div>
        
        </>
     );
}
 
export default Login;