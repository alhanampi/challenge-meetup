import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header>
        <span className="menu">
          <FontAwesomeIcon icon={faBars} className="bars" />
          Menú
        </span>
        <span>
          <img src={Logo} alt="" className="logo" />
        </span>
        <span className="user">
          <button className="user login">
            Login
            <FontAwesomeIcon icon={faChevronRight} className="userIcon" />
          </button>
          <button className="user register">
            Registrate
            <FontAwesomeIcon icon={faChevronRight} className="userIcon" />
          </button>
        </span>
      </header>
    </>
  );
};

export default Navbar;
