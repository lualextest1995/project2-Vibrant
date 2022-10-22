import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import AuthService from "./services/auth.service";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);
  return (
    <div className="App">
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
