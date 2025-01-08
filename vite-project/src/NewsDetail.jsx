import { useEffect, useState } from "react";
import axios from "axios";
import "./newsDetail.css";
import { useParams } from "react-router";

const NewsDetail = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const getArticles = async () => {
    try {
      const res = await axios.get(apiUrl);
      setArticles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      <div className="news-detail-container">
        {articles[id] && (
          <div>
            <div className="news-detail-img-con">
              <img
                className="news-detail-img"
                src={articles[id].enclosure.url}
                alt=""
              />
            </div>

            <h1 className="news-detail-title">{articles[id].title}</h1>
            <p className="news-detail-text">
              {articles[id]["content:encodedSnippet"]}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsDetail;
