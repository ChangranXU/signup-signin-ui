import React from "react";
import { Helmet } from 'react-helmet';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Changepwd from "./components/ChangePassword/ChangePaaword";

export default function ChangePassword() {

    return (
  <div className="changepassword">
    <Helmet>
        <title>Pac-Man Change Password</title>
      </Helmet>
      <NavigationBar/>
     <Changepwd/>
  </div>
        );
    }


