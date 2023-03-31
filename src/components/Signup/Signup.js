import "./Signup.css";
import React, {useState} from "react";

const Signup=()=>{
    const [account, setAccount] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [tel,setTel] = useState('');
    const [ConfirmPwd,setConfirmPwd] = useState('');

    const checkConfirmPwd = () => {
        if (password && ConfirmPwd!==password) {
            alert("Password does not match");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(account, email, tel,password) ;
        
    };
    return(
        <div className="login">
        <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
          <input
            required="required"
            type="text"
            placeholder="Username"
            value={account}
            onChange = {(e)=> setAccount(e.target.value)}
          />
       
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange = {(e)=> setEmail(e.target.value)}
          />
        <input type="tel" 
            placeholder="Enter Phone Number" 
            value={tel} 
            onChange={(e)=>setTel(e.target.value)}/>
            {/*</input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">*/}

          <input
            required="required"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange = {(e)=> setPassword(e.target.value)}
          />

        <input
            required="required"
            type="password"
            placeholder="Confirm password"
            value={ConfirmPwd}
            onChange = {(e)=> setConfirmPwd(e.target.value)}
          />

          <button type="submit" className="btn btn-primary" onClick={checkConfirmPwd}>
            Sign Up
          </button>
      </form>
      </div>
    )
}

export default Signup;