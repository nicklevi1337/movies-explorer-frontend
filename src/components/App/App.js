import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "../Main/Main";
import Header from "./../Header/Header";
import userData from "./../../utils/user";
import moviesData from "./../../utils/movies";
import Authorization from "./../Authorization/Authorization";
import Register from "./../Register/Register";
//import CurrentUserContext from "./../../context/CurrentUserContext.jsx"
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../404/404";
import { register, login } from "../../utils/MainApi.js";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // const [isRegister, setIsRegister] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const footer =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";

  const header =
    pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";

  function handleLogin(email, password) {
    setLoading(true);
    login(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem("token", data.token);
          navigate("/movies", { replace: true });
          console.log(isLoggedIn);
        }
      })
      .catch(() => {
        setLoggedIn(false);
        console.error();
      })
      .finally(() => setLoading(false));
  }

  function handleRegister(name, email, password) {
    setLoading(true);
    register(name, email, password)
      .then((res) => {
        if (res._id) {
          handleLogin(email, password);
          console.log(isLoggedIn);
          navigate("/movies");
        }
      })
      .catch(() => {
        console.error();
      })
      .finally(() => setLoading(false));
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("foundMovies");
    localStorage.removeItem("filterState");
    localStorage.removeItem("moviesSearchQuery");
    localStorage.removeItem("allMovies");
    navigate("/");
    console.log(isLoggedIn);
  }

  return (
    <div className="page">
      {header && <Header isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path="/" element={<Main user={userData} />} />
        <Route path="/movies" element={<Movies movies={moviesData} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies movies={moviesData} />}
        />

        <Route
          path="/profile"
          element={<Profile user={userData} onLogout={handleLogout} />}
        />
        <Route
          path="/signin"
          element={
            <Authorization
              user={userData}
              onLogin={handleLogin}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              user={userData}
              onRegister={handleRegister}
              isLoading={isLoading}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {footer && <Footer />}
    </div>
  );
}

export default App;
