import "./newsCard.css";
import PropTypes from "prop-types";

const NewsCard = (props) => {
  return (
    <>
      <div className="news-card">
        <img src={props.img} alt="asd" className="news-card-image" />
        <div className="news-card-content">
          <h2 className="news-card-title">{props.title.substring(0, 60)}...</h2>
          <p className="news-card-description">
            {props.description.substring(0, 150)}...
          </p>

          <div className="news-card-date-container">
            <p className="news-card-date">{props.date}</p>
            {/* <p className="news-card-date-day">{props.day}</p> */}
            <p className="news-card-author">{props.author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

NewsCard.defaultProps = {
  img: "https://imgrosetta.mynet.com.tr/file/13526218/13526218-640x380.png",
  title: "kotu gigidsashfbkasfasdsa",
  description:
    "adfsbh asigv cbsgdakv cbhjsab sadjfva. sadfvuyass sdaobfsalbdf sadfsaf dfsbh asigv cbsgdakv cbhjsab sadjfva. sadfvuyass sdaobfsalbdf sadfsaf dfsbh asigv cbsgdakv cbhjsab sadjfva. sadfvuyass sdaobfsalbdf sadfsaf dfsbh asigv cbsgdakv cbhjsab sadjfva. sadfvuyass sdaobfsalbdf sadfsaf",
  date: "20.02.2024",
  author: "asdas",
  day: 12,
};

export default NewsCard;
