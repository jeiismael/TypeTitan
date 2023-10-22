import { useState } from "react";
import { Tab, Tabs, Button } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import axios from "axios";
import { useEffect } from "react";

const LoginContainer = () => {
    let apiLogin = "http://localhost/typetitan/src/Backend/login.php";
    const [key, setKey] = useState('Login');
    const [loggedIn, setLoggedIn] = useState(false);
    

    // useEffect(() => {
    //     axios.get(apiLogin) 
    //       .then((response) => {
    //         if (response.status === 200) {
    //           setLoggedIn(true);           
    //         }
    //       })
    //   });

  return (
    <>
      <div className='login-container'>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-2"
        >
          <Tab eventKey="Login" title="Login">
            <Login />
          </Tab>
          <Tab eventKey="Register" title="Register">
            <Register />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default LoginContainer;
