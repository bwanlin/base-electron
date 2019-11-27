import React from 'react';
import LoginForm from '../../logicComponents/LoginForm/LoginForm';
import "./Login.css";

const Login = ()  => {
  return (
    <div className="Login">
      <div className="Login-card">
        <div style={{ margin: 10, marginBottom: 50 }}>Login page</div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;