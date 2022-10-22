import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import CollectionService from "../services/collection.service";
import CollectionPicture from "../components/CollectionPicture";

const Collection = () => {
  const navigate = useNavigate();
  const [collectionData, setCollectionData] = useState(null);

  function getCollectionData() {
    CollectionService.get()
      .then((data) => {
        setCollectionData(data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  useEffect(() => {
    if (AuthService.getCurrentUser() === null) {
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
            return <CollectionPicture key={pic.id} data={pic} />;
          })}
      </div>
    </div>
  );
};

export default Collection;
