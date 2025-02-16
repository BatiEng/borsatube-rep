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
        e.target.className === "section-title" ||
        e.target.className === "about-author" ||
        e.target.className === "about-img-container" ||
        e.target.className === "about-title" ||
        e.target.className === "about-exp" ||
        e.target.className === "about-container" ||
        e.target.className === "about-img" ||
        e.target.className === "analysis-page-sub" ||
        e.target.className === "analysis-link" ||
        e.target.className === "container" ||
        e.target.className === "analysis-desc-item analysis-share" ||
        e.target.className === "analysis-desc" ||
        e.target.className === "analysis-title" ||
        e.target.className === "analysis-desc-item analysis-exp" ||
        e.target.className === "card-img" ||
        e.target.className === "card-container" ||
        e.target.className === "tutorials-page-sub" ||
        e.target.className === "card-feature" ||
        e.target.className === "news-container" ||
        e.target.className === "news-card-description" ||
        e.target.className === "news-card-image" ||
        e.target.className === "news-card-date-container" ||
        e.target.className === "analysis-page-main" ||
        e.target.className === "all-elements" ||
        e.target.className === "analysis-card-main-container" ||
        e.target.className === "analysis-link-container" ||
        e.target.className === "tutorials-card" ||
        e.target.className === "analysis-desc-item analysis-date"
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
            <img
              className="header-logo"
              src="https://github.com/BatiEng/borsatube-rep/blob/main/vite-project/public/borsatube-logo.png?raw=true"
            />
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
