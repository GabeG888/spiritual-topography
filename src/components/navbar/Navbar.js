import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pages/images/stmLogo.jpg";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false); // change and update states
  const setDropdown = useState(false);
  const handleClick = () => setClick(!click); // acts as a toggle
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="shadow-2xl bg-white z-50 h-14 w-full">
        <nav className="navbar h-14 w-full">
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={
                click ? "text-black fas fa-times" : " text-black fas fa-bars"
              }
            />
          </div>
          <Link to="/" className="navbar-logo h-14 w-full">
            <div>
              Spiritual Topography Map{" "}
              <img className="logo" src={logo} alt="STM logo" />
            </div>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stm" className="nav-links" onClick={closeMobileMenu}>
                What is a STM?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/github"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Github
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            {/* <Button /> */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
