import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login Screen Mock</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="submit">Login</button>
    </div>
  );
};

export default Login;
