import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Login = ({ currentUser, setCurrentUser }) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function submitLogin() {
    AuthService.login(emailRef.current.value, passwordRef.current.value)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        setCurrentUser(AuthService.getCurrentUser());
        navigate("/collection");
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  }

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginbox">
          <Link className="logo" to="/">
            Picture
          </Link>
          <h1>登入帳戶</h1>
          <div>
            <label htmlFor="email">電子郵件：</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="您的電子郵件"
            />
          </div>
          <div>
            <label htmlFor="password">密碼：</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
              placeholder="密碼"
            />
          </div>
          <button onClick={submitLogin}>登入</button>
        </div>
        <p>
          沒有帳號嗎？ <Link to="/register">註冊</Link>
        </p>
        {message && (
          <div className="message">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
