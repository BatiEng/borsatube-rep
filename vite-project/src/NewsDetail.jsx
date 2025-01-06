import { useEffect, useState } from "react";
import axios from "axios";
import "./newsDetail.css";
import { useParams } from "react-router";

const NewsDetail = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:3000/api/rss");
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
            <img
              className="news-detail-img"
              src={articles[id].enclosure.url}
              alt=""
            />
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
