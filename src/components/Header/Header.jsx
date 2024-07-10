import "./Header.scss";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logos/tri-Pride_Logo_2023_WHITE_RGB.png";
import navDropdown from "../../assets/icons/menu.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const location = useLocation();
  const navRef = useRef(null);

  const isHomePage = location.pathname === '/';

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`header__wrapper ${isHomePage ? 'header__wrapper--home' : 'header__wrapper--other'}`}>
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="tri-Pride Logo" />
        </Link>
        {isMobile ? (
          <img
            className="header__menu-icon"
            src={navDropdown}
            alt="nav dropdown"
            onClick={toggleNav}
          />
        ) : (
          <nav className="header__nav">
            <ul className="header__list">
              {location.pathname !== "/" && (
                <li className="header__list-item">
                  <Link to="/" className="header__link">
                    HOME
                  </Link>
                </li>
              )}
              {location.pathname !== "/about" && (
                <li className="header__list-item">
                  <Link to="/about" className="header__link">
                    ABOUT US
                  </Link>
                </li>
              )}
              {location.pathname !== "/events" && (
                <li className="header__list-item">
                  <Link to="/events" className="header__link">
                    EVENTS
                  </Link>
                </li>
              )}
              {location.pathname !== "/get-involved" && (
                <li className="header__list-item">
                  <Link to="/get-involved" className="header__link">
                    GET INVOLVED
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
        {navOpen && isMobile && (
          <nav
            ref={navRef}
            className={`header__nav ${navOpen ? "header__nav--open" : ""}`}
          >
            <ul className="header__list">
              {location.pathname !== "/" && (
                <li className="header__list-item">
                  <Link to="/" onClick={toggleNav} className="header__link">
                    HOME
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
                    ABOUT US
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
                    EVENTS
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
                    GET INVOLVED
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
