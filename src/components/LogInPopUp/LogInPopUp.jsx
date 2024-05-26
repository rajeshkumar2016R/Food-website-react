import React, { useState } from "react";
import "./LogInPopUp.css";
import { assets } from "../../assets/assets";
const LogInPopUp = ({ setShowSignUp }) => {
  const [currentstate, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img
            onClick={() => setShowSignUp(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentstate === "Log In" ? 
            <div></div>:<input type="text" placeholder="Your Name" required />
          }

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Enter Password" required />
          {
            currentstate === "Log In"? <a href="" className="forgetPassword">Forget Password</a>: <div></div>
          }
        </div>
        <div className="popUp">
        <button onClick={()=>setCurrentState("Sign In")} className={currentstate === "Sign In" ? "orange" : "white"} >
          Sign In
        </button>
        <button onClick={()=>setCurrentState("Log In")} className={currentstate === "Log In" ? "orange" : "white"} >
           Log In
        </button>
        </div>
       
      </form>
    </div>
  );
};

export default LogInPopUp;
