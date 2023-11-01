import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Header from "./../Header/Header";
import userData from "./../../utils/user";
import moviesData from "./../../utils/movies";
import Authorization from "./../Authorization/Authorization";
import Register from "./../Register/Register";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../404/404";

function App() {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const footer =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";

  const header =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile";

  return (
    <div className="page">
      {header && <Header isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies movies={moviesData} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies movies={moviesData} />}
        />

        <Route path="/profile" element={<Profile user={userData} />} />
        <Route path="/signin" element={<Authorization user={userData} />} />
        <Route path="/signup" element={<Register user={userData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {footer && <Footer />}
    </div>
  );
}

export default App;
