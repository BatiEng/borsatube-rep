import "./footer.css";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <hr className="hr" />
      <div className="footer-container">
        <div className="footer-minus-copy">
          <div>
            <h2 className="footer-list-title">Kurumsal</h2>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#">
                  KVKK
                </a>
              </li>
              <li>
                <Link className="footer-link" to="/hakkimizda">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Gizlilik ve Çerez Politikası
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact-social">
            <div className="footer-contact-container">
              <h2 className="footer-list-title">İletişim</h2>
              <ul className="footer-list">
                <li>
                  <a href="#">borsatube@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="social-media">
              <a
                className="social-link"
                href="https://t.me/borsatube"
                target="_blank"
              >
                <BsTelegram />
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com/borsatube?igsh=a3l4czJmbjBrOGZr"
                target="_blank"
              >
                <IoLogoInstagram />
              </a>
              <a className="social-link" href="#">
                <FaYoutube />
              </a>
              <a
                className="social-link"
                href="https://x.com/borsatube?s=21"
                target="_blank"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="copy-footer">
          <p className="copy-text">
            Copyright {new Date().getFullYear()} &copy; Borsatube. Tüm hakları
            saklıdır
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
