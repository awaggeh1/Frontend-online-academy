import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Logout from './LogoutButton';

const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      {/* Log in Button */}
      <Button 
        size="lg" type="buton" variant="dark"
        onClick={() => loginWithRedirect()}
        >
          Login
      </Button>
    </div>
  );
};

export default LoginButton;
