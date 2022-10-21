import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  //登入
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }

  //登出
  logout() {
    localStorage.removeItem("user");
  }

  //註冊
  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }

  //取得當前使用者
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
