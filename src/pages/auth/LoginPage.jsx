import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";
import "../../styles/home/login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const successLogin = await login(email, password);

      if (successLogin) {
        setMessage('Login successful');
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setMessage("Failed to login");
      console.error("Error:", error);
    }
  };

  return (
    <div className="page-container">
      <div className="login-card">
        <h2 className="title-login">User Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-color btn-login">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
