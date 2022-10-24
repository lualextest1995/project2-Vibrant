import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CollectionService from "../services/collection.service";
import CollectionPicture from "../components/CollectionPicture";

const Collection = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const [collectionData, setCollectionData] = useState(null);

  function getCollectionData() {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }
    CollectionService.get(_id)
      .then((data) => {
        setCollectionData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getCollectionData();
  }, []);

  return (
    <div>
      <div className="collectionPictures">
        {collectionData &&
          collectionData.map((pic) => {
            return <CollectionPicture id="top" key={pic.id} data={pic} />;
          })}
      </div>
      <div className="topButton">
        <a href="#top" title="點擊回到最上方">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Collection;
