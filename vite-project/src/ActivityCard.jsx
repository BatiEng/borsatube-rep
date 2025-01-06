import "./activityCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ActivityCard(props) {
  return (
    <>
      <div className="activity-container">
        <div className="activity-desc">
          <h1 className="activity-card-title">{props.title}</h1>
          <h3 className="activity-author">
            Eğitmen: &ensp;
            <a className="activity-author-name" href="#">
              {props.instructor}
            </a>
          </h3>
          <p className="activity-exp">{props.description}</p>
          <Link className="activity-attend" to="/etkinlikler/id">
            Detay
          </Link>
        </div>
        <img className="activity-img" src={props.img} alt="activity image" />
      </div>
    </>
  );
}

// ActivityCard.prototype = {
//   title: PropTypes.string,
//   instructor: PropTypes.string,
//   description: PropTypes.string,
//   img: PropTypes.string,
// };
// ActivityCard.defaultProps = {
//   title: "İstanbul seminer",
//   instructor: "Gökhan Kozak",
//   description:
//     "Borsa üzerine yorumlar yapıp beraber sohbet ettiğimiz bir etkinliktir herkesi beklerim",
//   img: "https://images.unsplash.com/photo-1526398977052-654221a252b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// };

export default ActivityCard;
