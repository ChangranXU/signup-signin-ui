import "./Login.css";
import React, {useState} from "react";

const Login=()=>{
    const [account, setAccount] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(account, password) ;
        
    };
    return(
        <div className="login">
        <form  onSubmit={handleSubmit}>
        <h1>Login</h1>
          <input
            placeholder={"Email/ Username/ Phone Number"}
            type="text"
            value={account}
            onChange= {(e)=> setAccount(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange= {(e)=> setPassword(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              name="customCheck1"/>
              <span>remember the password</span>
              </label>
        
          <button type="submit">
            Login
          </button>  
        <p>
          Change <a href='/change-password'>password?</a>
        </p>
      </form>
      </div>
    )
}

export default Login;