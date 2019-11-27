import React from 'react';
import RegisterForm from '../../logicComponents/RegisterForm/RegisterForm'

import "./Register.css";

const Register = ()  => {
  return (
    <div className="Register">
      <div className="Register-card">
        <div style={{ margin: 10, marginBottom: 50 }}>Register page</div>
        <RegisterForm />        
      </div>
    </div>
  );
}

export default Register;