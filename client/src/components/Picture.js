import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="container">
        <p className="love">
          <i className="fa-solid fa-heart"></i>
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
