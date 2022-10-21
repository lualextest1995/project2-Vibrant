import React from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../services/auth.service";

const Nav = ({ currentUser, setCurrentUser }) => {
  function logout() {
    AuthService.logout();
    setCurrentUser(null);
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <i className="fa-solid fa-icons"></i> picture
        </Link>
      </div>
      <ul>
        <li>
          <NavLink end to="/">
            <i className="fa-solid fa-house"></i> 首頁
          </NavLink>
        </li>
        {currentUser && (
          <li>
            <NavLink
              to="/collection"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-solid fa-heart"></i> 我的收藏
            </NavLink>
          </li>
        )}
        {!currentUser && (
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-solid fa-user-plus"></i> 註冊
            </NavLink>
          </li>
        )}
        {!currentUser && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="fa-solid fa-user"></i> 登入
            </NavLink>
          </li>
        )}
        {currentUser && (
          <li>
            <Link onClick={logout} to="/">
              <i className="fa-solid fa-person-walking-arrow-right"></i> 登出
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
