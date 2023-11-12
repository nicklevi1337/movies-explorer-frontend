import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "../Main/Main";
import Header from "./../Header/Header";
import Authorization from "./../Authorization/Authorization";
import Register from "./../Register/Register";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute.jsx";
import { CurrentUserContext } from "./../../context/CurrentUserContext.jsx";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../404/404";
import {
  register,
  login,
  updateUserInfo,
  getProfileInfo,
  getContent,
  saveMovie,
  deleteMovie,
} from "../../utils/MainApi.js";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // const [isRegister, setIsRegister] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [updateError, setUpdateError] = useState(false);
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isNewEntranceOnPage, setNewEntranceOnPage] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const footer =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";

  const header =
    pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";

  //Вход
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
      .catch((err) => {
        setLoggedIn(false);
        setLoginError(true);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }

  //Регистрация

  function handleRegister(name, email, password) {
    setLoading(true);
    register(name, email, password)
      .then((res) => {
        if (res._id) {
          handleLogin(email, password);
          setRegisterError(false);
        }
      })
      .catch((err) => {
        setRegisterError(true);
       console.error(err);
      })
      .finally(() => setLoading(false));
  }

  //Обновление профиля
  function handleUpdateUser(inputValues) {
    setLoading(true);
    updateUserInfo(inputValues)
      .then((dataUser) => {
        setEditingProfile(false);
        setUpdateError(false);
        setCurrentUser(dataUser);
      })
      .catch((err) => {
        setUpdateError(true);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear();
    setCurrentUser({});
    navigate("/");
  }

  //Удаление фильма
  function handleDeleteMovie(savedMovieId) {
    deleteMovie(savedMovieId, localStorage.token)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== savedMovieId;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Сохранение фильма
  function handleChangeSaveStatus(movie) {
    const isSaved = savedMovies.some((element) => movie.id === element.movieId);
    if (!isSaved) {
      saveMovie(movie, localStorage.token)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const seachSavedMovie = savedMovies.filter((element) => {
        return element.movieId === movie.id;
      });
      handleDeleteMovie(seachSavedMovie[0]._id);
    }
  }

  function handleClickEditProfile() {
    setEditingProfile(true);
    setNewEntranceOnPage(false);
  }

  function handleEntranceOnProfile() {
    setNewEntranceOnPage(true);
  }





  //Получение данных пользователя, если залогинился
  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      getProfileInfo(token)
        .then((dataUser) => {
          setCurrentUser(dataUser);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  //Проверка токена при загрузке страницы
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            if (pathname === "/signup" || pathname === "/signin") {
              navigate('/movies', {replace: true})
            }
          }
        })
        .catch(console.error);
    } else {
      setLoggedIn(false);
      localStorage.clear();
    }
  }, [navigate, pathname]);





  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {header && (
          <Header
            isLoggedIn={isLoggedIn}
            newEntrance={handleEntranceOnProfile}
          />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                loggedIn={isLoggedIn}
                element={Movies}
                onChangeSave={handleChangeSaveStatus}
                onDelete={handleDeleteMovie}
                savedMovies={savedMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                loggedIn={isLoggedIn}
                element={SavedMovies}
                onDelete={handleDeleteMovie}
                savedMovies={savedMovies}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                loggedIn={isLoggedIn}
                element={Profile}
                onEditProfile={handleClickEditProfile}
                onLogout={handleLogout}
                onUpdate={handleUpdateUser}
                isLoading={isLoading}
                updateError={updateError}
                isEditingProfile={isEditingProfile}
                isNewEntranceOnPage={isNewEntranceOnPage}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleRegister}
                isLoading={isLoading}
                registerError={registerError}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Authorization
                onLogin={handleLogin}
                isLoading={isLoading}
                loginError={loginError}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {footer && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
