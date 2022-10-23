import React, { useState, useEffect } from "react";
import CollectionService from "../services/collection.service";
import Swal from "sweetalert2";

const Picture = ({ data, currentUser, setCurrentUser }) => {
  const [color, setColor] = useState({ color: "" });

  function postCollection() {
    if (color.color === "") {
      //新增
      CollectionService.post(
        data.id,
        data.photographer,
        data.photographer_url,
        data.src.large,
        data.alt,
        data.src.original
      )
        .then(() => {
          Swal.fire({
            toast: true,
            icon: "success",
            position: "bottom-end",
            title: "圖片收藏成功!!",
            color: "white",
            showConfirmButton: false,
            timer: 1000,
            background: "#A3A3FF",
          });
          setColor({ color: "red" });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "錯誤!!",
            text: "要加入收藏，請先登入帳號",
            icon: "warning",
            confirmButtonText: "OK",
          });
        });
    } else {
      //刪除
      CollectionService.delete(data.id)
        .then(() => {
          Swal.fire({
            toast: true,
            icon: "success",
            position: "bottom-end",
            title: "圖片取消收藏成功!!",
            color: "white",
            showConfirmButton: false,
            timer: 1000,
            background: "#FF7878",
          });
          setColor({ color: "" });
        })
        .catch((error) => {
          window.alert(error.response.data);
        });
    }
  }

  //已收藏的顯示紅色愛心
  function check() {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }
    if (currentUser) {
      CollectionService.get(_id)
        .then((response) => {
          response.data.map((d) => {
            if (d.id === data.id) {
              setColor({ color: "red" });
            }
          });
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  }

  useEffect(() => {
    check();
  }, []);

  return (
    <div className="picture">
      <div className="container">
        <p className="love" onClick={postCollection}>
          <i style={color} className="fa-solid fa-heart"></i>
        </p>
        <a
          target="_blank"
          href={data.src.original}
          title="點擊前往原始圖片位置"
          rel="noreferrer noopener"
        >
          <img src={data.src.large} alt="" loading="lazy" />
        </a>
      </div>
      <p>
        <i className="fa-solid fa-camera-retro"></i> 作者：
        <a
          target="_blank"
          href={data.photographer_url}
          title="前往作者的創作區"
          rel="noreferrer noopener"
        >
          {data.photographer}
        </a>
      </p>
    </div>
  );
};

export default Picture;
