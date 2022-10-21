import React, { useState, useEffect } from "react";
import CollectionService from "../services/collection.service";
import AuthService from "../services/auth.service";

const Picture = ({ data }) => {
  const [color, setColor] = useState({ color: "" });

  function postCollection() {
    if (color.color == "") {
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
          setColor({ color: "red" });
        })
        .catch((error) => {
          //console.log(error.response.data);
          window.alert("要加入收藏，請先登入帳號");
        });
    } else {
      //刪除
      CollectionService.delete(data.id)
        .then(() => {
          setColor({ color: "" });
        })
        .catch((error) => {
          window.alert(error.response.data);
        });
    }
  }

  //已收藏的顯示紅色愛心
  function check() {
    if (AuthService.getCurrentUser() === null) {
      return;
    } else {
      CollectionService.get()
        .then((response) => {
          response.data.map((d) => {
            if (d.id == data.id) {
              setColor({ color: "red" });
            }
          });
        })
        .catch((error) => {
          window.alert(error.response.data);
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
        >
          {data.photographer}
        </a>
      </p>
    </div>
  );
};

export default Picture;
