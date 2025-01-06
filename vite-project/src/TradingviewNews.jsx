import { useEffect, useRef } from "react";
import "./tradingviewNews.css";

const TradingviewNews = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "regular",
        width: 1200,
        height: 550,
        colorTheme: "dark",
        locale: "tr",
      });
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-news-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default TradingviewNews;
