import React, { useRef } from "react";
import CollectionService from "../services/collection.service";
import Swal from "sweetalert2";

const CollectionPicture = ({ data }) => {
  const deleteRef = useRef("");
  function deleteCollection() {
    CollectionService.delete(data.id)
      .then(() => {
        deleteRef.current.remove();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }

  return (
    <div ref={deleteRef} className="collectionPicture">
      <div className="collectionContainer">
        <p className="love" onClick={deleteCollection} title="點擊取消收藏">
          <i className="fa-solid fa-heart"></i>
        </p>
        <a
          target="_blank"
          href={data.original}
          title="點擊前往原始圖片位置"
          rel="noreferrer noopener"
        >
          <img src={data.src} alt="" loading="lazy" />
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

export default CollectionPicture;
