import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Register = () => {
  const usenameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function submitRegister() {
    AuthService.register(
      usenameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  }
  return (
    <div className="register">
      <div className="registerContainer">
        <div className="registerbox">
          <h1>
            建立您的<Link to="/">Picture</Link>帳戶
          </h1>
          <div className="inputbox">
            <label htmlFor="username">姓名：</label>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="姓名"
                ref={usenameRef}
              />
            </div>
          </div>
          <div className="inputbox">
            <label htmlFor="email">電子郵件：</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="您的電子郵件"
                ref={emailRef}
              />
            </div>
          </div>
          <p>你必須確認這個電子郵件地址屬於你本人</p>
          <div className="inputbox">
            <label htmlFor="password">密碼：</label>
            <div>
              <input
                type="password"
                name="password"
                placeholder="密碼"
                id="password"
                ref={passwordRef}
              />
            </div>
          </div>
          <p>請混合使用８個字元以上的英文字母、數字和符號</p>

          <button onClick={submitRegister}>註冊</button>
        </div>
        <p>
          已有帳號嗎？ <Link to="/login">立即登入</Link>
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

export default Register;
