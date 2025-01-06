import "./analysisDetail.css";
import AnalysisCard from "./AnalysisCard";
import allData from "./allData/AnalysisData";
import { useParams } from "react-router";
const AnalysisDetail = () => {
  const { id } = useParams();
  const data = allData.filter((d) => d.id === id * 1);
  return (
    <>
      <div className="analysis-detail-container">
        <div className="analysis-detail-share">
          <h1 className="analysis-detail-name">
            {data[0].shareName} hisse analizi
          </h1>

          <img
            className="analysis-detail-img"
            src={data[0].img}
            alt="analysis img"
          />
        </div>
        <div className="analysis-detail-description">
          <h1 className="analysis-detail-title">{data[0].title}</h1>
          <p className="analysis-detail-text">{data[0].description}</p>
        </div>
      </div>
    </>
  );
};

export default AnalysisDetail;
