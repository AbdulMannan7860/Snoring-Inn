import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    console.log('Login button clicked');
    navigate('/portal'); 
  };

  return (
    <div className="loginContainer">
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default LoginForm;



