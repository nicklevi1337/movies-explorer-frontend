import "./Navigation.css";
import { NavLink } from "react-router-dom";
//import { useLocation } from "react-router-dom";

function Navigation() {

  return (
    <nav className='header__navigation'>
        <NavLink to='/movies' title='Фильмы' className='header__link header__link_type_films' activeClassName='header__link_active'>Фильмы</NavLink>
        <NavLink to='/saved-movies' title='Сохранённые фильмы' className='header__link header__link_type_saved-films' activeClassName='header__link_active'>Сохранённые фильмы</NavLink>
    </nav>
  );
}

export default Navigation;


/*

<nav className="navigation">
      <NavLink
        to="/"
        className={`navigation__link navigation__link_type_main ${
          pathname === "/" ? "navigation__link_active" : ""
        }`}
        onClick={onClick}
      >
        Главная
      </NavLink>
      <NavLink
        to="/movies"
        className={`navigation__link ${
          pathname === "/movies" ? "navigation__link_active" : ""
        }`}
        onClick={onClick}
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={
          pathname === "/saved-movies"
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
        onClick={onClick}
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
*/