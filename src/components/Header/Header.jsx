import "./Header.scss";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logos/tri-Pride_Logo_2023_WHITE_RGB.png";
import navDropdown from "../../assets/icons/menu.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <div className="header__wrapper">
      <header className="header">
        <Link to="/home" className="header__logo">
          <img src={logo} alt="tri-Pride Logo" />
        </Link>
        <img
          className="header__menu-icon"
          src={navDropdown}
          alt="nav dropdown"
          onClick={toggleNav}
        />
        {navOpen && (
          <nav ref={navRef} className={`header__nav ${navOpen ? "header__nav--open" : ""}`}>
            <ul className="header__list">
              {location.pathname !== "/home" && (
                <li className="header__list-item">
                  <Link to="/home" onClick={toggleNav} className="header__link">
                    Home
                  </Link>
                </li>
              )}
              {location.pathname !== "/about" && (
                <li className="header__list-item">
                  <Link
                    to="/about"
                    onClick={toggleNav}
                    className="header__link"
                  >
                    About Us
                  </Link>
                </li>
              )}
              {location.pathname !== "/events" && (
                <li className="header__list-item">
                  <Link
                    to="/events"
                    onClick={toggleNav}
                    className="header__link"
                  >
                    Events
                  </Link>
                </li>
              )}
              {location.pathname !== "/get-involved" && (
                <li className="header__list-item">
                  <Link
                    to="/get-involved"
                    onClick={toggleNav}
                    className="header__link"
                  >
                    Get Involved
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </header>
      <hr className="divider" />
    </div>

  );
};

export default Header;
