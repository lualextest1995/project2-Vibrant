import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../services/auth.service";

const Nav = ({ currentUser, setCurrentUser }) => {
  const [display, setDisplay] = useState({ display: "none" });

  function logout() {
    AuthService.logout();
    setCurrentUser(null);
  }

  function openMenu() {
    if (display.display == "none") {
      setDisplay({ display: "block" });
    } else {
      setDisplay({ display: "none" });
    }
  }

  function closeMenu() {
    setDisplay({ display: "none" });
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <i className="fa-solid fa-icons"></i> picture
        </Link>
      </div>
      <ul className="menu">
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
            <a onClick={logout} href="/">
              <i className="fa-solid fa-person-walking-arrow-right"></i> 登出
            </a>
          </li>
        )}
      </ul>
      <div className="fold">
        <p onClick={openMenu}>
          <i className="fa-solid fa-bars"></i>
        </p>
        <ul className="foldMenu" style={display}>
          <li>
            <NavLink end to="/" onClick={closeMenu}>
              <i className="fa-solid fa-house"></i> 首頁
            </NavLink>
          </li>
          {currentUser && (
            <li>
              <NavLink
                to="/collection"
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <i className="fa-solid fa-user"></i> 登入
              </NavLink>
            </li>
          )}
          {currentUser && (
            <li>
              <a onClick={logout} href="/">
                <i className="fa-solid fa-person-walking-arrow-right"></i> 登出
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
