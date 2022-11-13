import React, { useContext, useEffect } from 'react';
import SigninForm from './SigninForm';
import SignUpForm from './SignUpForm';
import RegisterHero from './RegisterHero';
import { authContext } from '../contexts/AuthProvider';
import { When } from 'react-if';
import { Navigate } from 'react-router-dom';
import cookies from 'react-cookies'

function Register() {

  const { isAuth, setIsAuth, authStates } = useContext(authContext);

  useEffect(() => {
    const token = cookies.load('token');
    if (token) {
      setIsAuth(true);
    }
  }, [])

  return (
    <>
      <When condition={isAuth}>
        <Navigate to='/' />
      </When>
      <When condition={!isAuth}>
        <RegisterHero />
        <When condition={authStates.showSignIn}>
          <SigninForm />
        </When>
        <When condition={!authStates.showSignIn}>
          <SignUpForm />
        </When>
      </When>
    </>

  )
}

export default Register