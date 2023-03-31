import "./ChangePassword.css"
import React, {useState} from "react";
import { Helmet } from 'react-helmet';

const ChangePassword=()=>{

    const [account, setAccount] = useState('');
    const [oldpassword,setOldPassword] = useState('');
    const [password,setPassword] = useState('');
    const [ConfirmPwd,setConfirmPwd] = useState('');

    const checkConfirmPwd = () => {
        if (password && ConfirmPwd!==password) {
            alert("Password does not match");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(account, password) ;
        
    };
    return(
        <div className="changepasswordbox">
        <div className="login">
        <Helmet>
        <title>Change Password</title>
        </Helmet>
      <form onSubmit={handleSubmit}>
        <h1>Change Password</h1>
       
          <input
            type="text"
            placeholder="Email/ Username/ Phone Number"
            value={account}
            onChange = {(e)=> setAccount(e.target.value)}
          />

          <input
            type="password"
            placeholder="Old Password"
            value={oldpassword}
            onChange = {(e)=> setOldPassword(e.target.value)}
          />

          <input
            type="password"
            className="form-control"
            placeholder="New Password"
            value={password}
            onChange = {(e)=> setPassword(e.target.value)}
          />

        <input
            type="password"
            className="form-control"
            placeholder="Confirm New Password"
            value={ConfirmPwd}
            onChange = {(e)=> setConfirmPwd(e.target.value)}
          />

          <button type="submit" className="btn btn-primary" onClick={checkConfirmPwd}>
            Confirm Change
          </button>

        <p className="forgot-password text-right">
          Return to <a href="/">Login?</a>
        </p>
      </form>
    </div>
    </div>
    )
}

export default ChangePassword;