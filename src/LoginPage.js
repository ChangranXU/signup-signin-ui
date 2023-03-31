import React from "react";
import { Helmet } from 'react-helmet';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LoginSignupContainer from './components/LoginSignUpContainer/LoginSignUpContainer';

function LoginPage() {
    return (
    <div className='loginpage'>
      <Helmet>
        <title>Legal Expression</title>
      </Helmet>
      <NavigationBar/>
      <LoginSignupContainer/>
    </div>);
}


export default LoginPage;