import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const Logout = () => {
  
  const { logout } = useAuth0();

  return (
    <div>
      <Button 
        size="sm" type="buton" variant="dark"
        onClick={() => logout({returnTo: window.location.origin})}
        >
          Logout
      </Button>
    </div>
  );
};

export default Logout;