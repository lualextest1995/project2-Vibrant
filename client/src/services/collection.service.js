import axios from "axios";
const API_URL = "http://localhost:8080/api/collections";

class CollectionService {
  //加入收藏
  post(id, photographer, photographer_url, src, alt, original) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      {
        id,
        photographer,
        photographer_url,
        src,
        alt,
        original,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  //讀取我的收藏
  get(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }

  //刪除我的收藏
  delete(id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.delete(API_URL + "/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new CollectionService();
