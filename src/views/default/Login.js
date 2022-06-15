import { useAuth0 } from '@auth0/auth0-react';
import API from 'api-config';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import LoginButton from './LoginButton';

const Login = () => {

  const Authenticated = useAuth0().isAuthenticated;
  const history = useHistory();
  const { user } = useAuth0();

  // Guarda en el sessionStorage los datos de incio
  const GetUserData = () => {
    sessionStorage.setItem('user', JSON.stringify(user))
    console.log('LOGIN', user)
  }

  // Fa un post d'un nou review a la base de dades
  async function PostStudent(){
  fetch(`${API.ADDR}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user_id: user.sub,
      first_name: user.nickname,
      last_name: '',
      img_uri: user.picture
    })
  })
  }

  useEffect(() => {
    GetUserData()
    
    // Si el user ya esta definidio, podrá hacer el post
    if(user){
      PostStudent()
    }
  })


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

