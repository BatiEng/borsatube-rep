import "./analysisCard.css";
import { SlCalender } from "react-icons/sl";
import PropTypes from "prop-types";

function AnalysisCard(props) {
  return (
    <div className="analysis-card-main-container">
      <div className="analysis-container">
        <img className="analysis-img" src={props.img} alt="analysis image" />
        <hr />
        <div className="analysis-desc">
          <h1 className="analysis-title">{props.title}</h1>
          <h3 className="analysis-desc-item analysis-share">
            - Hisse senedi: {props.shareName}
          </h3>
          <h3 className="analysis-desc-item analysis-date">
            - <SlCalender /> {props.date}
          </h3>
          <p className="analysis-desc-item analysis-exp">
            {props.description.substring(0, 38)}...
          </p>
        </div>
        <hr />
        <div className="analysis-author-container">
          <p>Yayınlayan:</p>
          <h3 className="analysis-author">{props.publishedBy}</h3>
        </div>
      </div>
    </div>
  );
}
AnalysisCard.prototype = {
  img: PropTypes.string,
  title: PropTypes.string,
  shareName: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  publishedBy: PropTypes.string,
};

AnalysisCard.defaultProps = {
  img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Fincan Kulp geliyor",
  shareName: "THY",
  date: "20.02.2024",
  description: "THY'nin kotu gidisatina kim dur diy",
  publishedBy: "Gökhan Kozak",
};

export default AnalysisCard;
