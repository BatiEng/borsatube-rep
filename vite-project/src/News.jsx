import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "./news.css";
import axios from "axios";
import { Link } from "react-router-dom";

function News() {
  const [articles, setArticles] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0"); // Adds leading zero if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

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
      <div className="news-container">
        {articles.map((item, index) => (
          <div key={index}>
            <Link to={`/haberler/${index}`} className="news-card-link">
              <NewsCard
                img={item.enclosure.url}
                title={item.title}
                description={item["content:encodedSnippet"]}
                date={formatDate(new Date(item.isoDate))}
                author={item.author}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default News;
