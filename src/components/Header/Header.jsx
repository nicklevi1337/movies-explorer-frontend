import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import AccountLink from "../AccountLink/AccountLink";
import FormLink from "../FormLink/FormLink";
import Logo from "./../ui/Logo/Logo";

function Header({ isLoggedIn }) {
  const [menu, setMenu] = useState();
  const { pathname } = useLocation();
  function handleOpenMenu() {
    setMenu(!menu);
  }

  const headerMenu =
    // pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        {isLoggedIn && headerMenu && (
          <>
            <div
              className={
                menu
                  ? "header__menu-overlay header__menu-overlay_active"
                  : "header__menu-overlay"
              }
            >
              <div
                className={
                  menu
                    ? "header__menu-wrapper header__menu-wrapper_active"
                    : "header__menu-wrapper "
                }
              >
                <div className="header__menu">
                  <Navigation onClick={handleOpenMenu} />
                  <AccountLink onClick={handleOpenMenu} />
                </div>
              </div>
            </div>

            <button
              className="header__burger"
              type="button"
              onClick={handleOpenMenu}
            ></button>
            <button
              className={
                menu
                  ? "header__close-btn header__close-btn_active"
                  : "header__close-btn"
              }
              type="button"
              onClick={handleOpenMenu}
            ></button>
          </>
        )}
        {isLoggedIn && pathname === "/" && <FormLink />}
      </div>
    </header>
  );
}

export default Header;

/*
<header className={pathname === "/" ? "header header_black" : "header"}>
 <Link to="/profile" >profile</Link>
<div className="header__container">


<header className="header">
      <div className="header__container">
      <Logo />
      
        {isLoggedIn && headerMenu && (
          <>
         
            <div
              className={
                menu
                  ? "header__menu-overlay header__menu-overlay_active"
                  : "header__menu-overlay"
              }
            >
              <div
                className={
                  menu
                    ? "header__menu-wrapper header__menu-wrapper_active"
                    : "header__menu-wrapper "
                }
              >

                <div className="header__menu">
                <Navigation onClick={handleOpenMenu} />
                  <AccountLink onClick={handleOpenMenu} />
                </div>
              </div>
            </div>

            <button
              className="header__burger"
              type="button"
              onClick={handleOpenMenu}
            ></button>
            <button
              className={
                menu
                  ? "header__close-btn header__close-btn_active"
                  : "header__close-btn"
              }
              type="button"
              onClick={handleOpenMenu}
            ></button>
          </>
        )}
        {isLoggedIn && pathname === "/" && <FormLink />}
        </div>
    </header>
  );
}

export default Header;


const [menu, setMenu] = useState();
  const { pathname } = useLocation();
  function handleOpenMenu() {
    setMenu(!menu);
  }

  const headerMenu =
    // pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";







*/
