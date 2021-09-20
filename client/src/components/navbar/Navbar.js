import React, { useContext } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/authContext/authContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);

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
          {isAuthenticated ? (
            <p>Hola!</p>
          ) : (
            <>
              <button className="user login">
                <Link to="login" className="link">
                  Login
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="userIcon"
                  />{" "}
                </Link>
              </button>
              <button className="user register">
                <Link to="register" className="link">
                  Registrate
                  <FontAwesomeIcon icon={faChevronRight} className="userIcon" />
                </Link>
              </button>
            </>
          )}
        </span>
      </header>
    </>
  );
};

export default Navbar;
