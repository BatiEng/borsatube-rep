import "./header.css";
import { IoPerson } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

function Header() {
  document.addEventListener("click", (e) => {
    const w = window.innerWidth;

    if (w < 880) {
      if (
        e.target.className === "hero-container" ||
        e.target.className === "hero-title" ||
        e.target.className === "tutorial-container" ||
        e.target.className === "tutorial-container-sub" ||
        e.target.className === "section-title"
      ) {
        const navEl = document.querySelector(".nav-links");
        navEl.style.display = "none";
      }
      console.log(e.target.className);
    }
  });
  const hideSideBar = () => {
    const w = window.innerWidth;

    if (w < 880) {
      const navEl = document.querySelector(".nav-links");
      navEl.style.display = "none";
    }
  };
  const showSideBar = () => {
    const navEl = document.querySelector(".nav-links");
    navEl.style.display = "flex";
  };
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
        <ul className="nav-links">
          <li onClick={hideSideBar}>
            <p className="hide-icon">
              <IoClose />
            </p>
          </li>
          <li onClick={hideSideBar}>
            <Link to="/hakkimizda">
              <p>Hakkımızda</p>
            </Link>
          </li>
          <li onClick={hideSideBar}>
            <Link to="/analizler">
              <p>Analizler</p>
            </Link>
          </li>
          <li onClick={hideSideBar}>
            <Link to="/egitimler">
              <p className="abc">Eğitimler</p>
            </Link>
          </li>
          {/* <li onClick={hideSideBar}>
            <Link to="/etkinlikler">
              <p>Seminerler</p>
            </Link>
          </li> */}
          {/* <li onClick={hideSideBar}>
            <Link to="/kutuphane">
              <p>Kütüphane</p>
            </Link>
          </li> */}
          <li onClick={hideSideBar}>
            <Link to="/haberler">
              <p>Haberler</p>
            </Link>
          </li>
          <li className="login-sidebar" onClick={hideSideBar}>
            <Link to="/giris-yap">
              <p>Giriş Yap</p>
            </Link>
          </li>
        </ul>
        <div className="header-bar-login">
          <div onClick={showSideBar} className="bar-icon">
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
