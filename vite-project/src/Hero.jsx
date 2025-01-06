import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <h1 className="hero-title">Paraya giden yol</h1>
        <Link className="hero-link" to="/egitimler">
          Eğitimler
        </Link>
      </div>
    </>
  );
}

export default Hero;
