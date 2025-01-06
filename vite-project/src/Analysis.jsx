import AnalysisCard from "./AnalysisCard";
import analysisData from "./allData/AnalysisData";
import { Link } from "react-router-dom";
import "./analysis.css";

function Analysis() {
  return (
    <>
      <div className="analysis-page-sub">
        {analysisData.map((a) => (
          <div key={a.id}>
            <Link to={`/analizler/${a.id}`} className="analysis-link">
              <AnalysisCard
                img={a.img}
                title={a.title}
                shareName={a.shareName}
                date={a.date}
                description={a.description}
                publishedBy={a.publishedBy}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Analysis;
