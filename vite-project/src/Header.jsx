import "./header.css";
import { IoPerson } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsSidebarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img className="header-logo" src="./../public/borsatube-logo.png" />
          </Link>
          <Link className="header-title" to="/">
            Borsatube
          </Link>
        </div>
        <ul
          ref={navRef}
          className={`nav-links ${isSidebarVisible ? "visible" : "hidden"}`}
        >
          <li onClick={hideSidebar}>
            <p className="hide-icon">
              <IoClose />
            </p>
          </li>
          <li onClick={hideSidebar}>
            <Link to="/hakkimizda">
              <p>Hakkımızda</p>
            </Link>
          </li>
          <li onClick={hideSidebar}>
            <Link to="/analizler">
              <p>Analizler</p>
            </Link>
          </li>
          <li onClick={hideSidebar}>
            <Link to="/egitimler">
              <p>Eğitimler</p>
            </Link>
          </li>
          <li onClick={hideSidebar}>
            <Link to="/etkinlikler">
              <p>Seminerler</p>
            </Link>
          </li>
          <li onClick={hideSidebar}>
            <Link to="/haberler">
              <p>Haberler</p>
            </Link>
          </li>
          <li className="login-sidebar" onClick={hideSidebar}>
            <Link to="/login">
              <p>Giriş Yap</p>
            </Link>
          </li>
        </ul>
        <div className="header-bar-login">
          <div onClick={toggleSidebar} className="bar-icon">
            <FaBars />
          </div>
          <Link className="login" to="/giris-yap">
            <IoPerson />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
