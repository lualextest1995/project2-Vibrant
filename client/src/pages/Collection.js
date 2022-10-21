import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Collection = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (AuthService.getCurrentUser() === null) {
      navigate("/login");
    }
  }, []);
  return <div>Collection</div>;
};

export default Collection;
