import "./tutorialCard.css";
import { FaTurkishLiraSign } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function TutorialCard(props) {
  useEffect(() => {
    if (props.isBtn !== null) {
      if (props.isBtn === false) {
        const btn = document.querySelector(".inspect");
        const container = document.querySelector(".card-container");
        btn.style.display = "none";
        container.style.height = "77rem";
      }
    }
  }, []);
  return (
    <div className="card-container">
      <h1 className="card-title">{props.title}</h1>
      <img className="card-img" src={props.img} alt="tutorial image" />
      <ul className="card-features">
        <li>
          <p>
            <b>3-6-9-12 TAKSİT İMKANI</b>
          </p>
        </li>
        {props.features.map((f) => (
          <div key={f}>
            <li>
              <p className="card-feature">{f}</p>
            </li>
          </div>
        ))}
      </ul>
      <div className="price-container">
        <h3 className="card-price fake-price">{props.fakePrice}</h3>
        <h2 className="card-price real-price">
          {props.price} <FaTurkishLiraSign />
        </h2>
      </div>

      <Link className="inspect" to={`/egitimler/${props.id}`}>
        Incele
      </Link>
      <p className="certificate">Sertifikalı</p>
    </div>
  );
}

// TutorialCard.prototype = {
//   title: PropTypes.string,
//   img: PropTypes.string,
//   fakePrice: PropTypes.number,
//   price: PropTypes.number,
// };
// TutorialCard.defaultProps = {
//   title: "Teknik analiz Eğitimi",
//   img: "https://images.unsplash.com/photo-1509701852059-c221a6f1e878?q=80&w=3191&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   price: 17.999,
// };

export default TutorialCard;
