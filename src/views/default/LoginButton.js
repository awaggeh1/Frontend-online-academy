import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button,  Col, Row  } from 'react-bootstrap';

const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <style type="text/css">
        {`
        .btn-flat {
          background-color: #00bfff;
          color: white;
        }
        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
      </style>

      <Row>
        <Col className="text-center mt-5">
          <Button 
            variant="flat"
            size='xl'
            onClick={() => loginWithRedirect()}
            >
            Login
          </Button>
        </Col>
      </Row>
    </>
  )
};

export default LoginButton;
