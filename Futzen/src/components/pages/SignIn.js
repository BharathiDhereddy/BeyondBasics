import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import './SignUp.js';
function SignIn() {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="signin-button">Sign In</button>
        <br/>
        <div className="signup-link">
          Not a registered user? <Link to="/sign-up">SignUp</Link>
        </div>
      </form>
      
    </div>
  );
}

export default SignIn;
