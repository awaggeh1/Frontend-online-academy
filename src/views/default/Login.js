import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";
import LoginButton from './LoginButton';

const Login = () => {
  const Authenticated = useAuth0().isAuthenticated;
  const history = useHistory();
  const { user } = useAuth0();
  
  
  return (
        <>
            {/* Shows after login  */}
            {Authenticated && 
            <>
              {history.push('/dashboards/elearning')}
            </>
            } 
            {/* Shows before login where login button is  */}
            {!Authenticated && <LoginButton/>} 
        </>
  );
};

export default Login;

