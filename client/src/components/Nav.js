import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/home">
          <i className="fa-solid fa-icons"></i> picture
        </Link>
      </div>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="fa-solid fa-house"></i> 首頁
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="fa-solid fa-heart"></i> 我的收藏
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="fa-solid fa-user-plus"></i> 註冊
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="fa-solid fa-user"></i> 登入
          </NavLink>
        </li>
        <li>
          <Link to="/home">
            <i className="fa-solid fa-person-walking-arrow-right"></i> 登出
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
