import React, { useRef, useState } from "react";
import "./LoginSignUpContainer.css";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup";

const LoginSignUpContainer = () => {

    const [login, setLogin] = useState(true);

    const LoginSignUpContainerRef = useRef(null);

    const handleLogin = () => {
        setLogin(!login);
        LoginSignUpContainerRef.current.classList.toggle("login-signup-container--active");
    }

    return (
        <div className="login-signup-container" ref={LoginSignUpContainerRef}>
            <Login />
            <div className="login-signup-container__divider">
                <button type="button" onClick={handleLogin}>{login ? "sign up" : "login"}</button>
            </div>
            <SignUp />
        </div>
    )}
    export default LoginSignUpContainer;