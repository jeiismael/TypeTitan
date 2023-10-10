import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

const Login = () => {
    return ( 
        <>
        <div className='login-container'>
            <h2>Sign in</h2>
        <InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        </InputGroup>  
        <Form.Control
        placeholder='Password'
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        />
        <span className='loginButtons'>
            <Button variant='link' className="register-link">Register</Button>
        </span>
        <span>
            <Button type="submit" className="login-button">Log In</Button>
        </span>
        </div>
        
        </>
     );
}
 
export default Login;