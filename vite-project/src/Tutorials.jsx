import { useEffect } from "react";
import tutorialData from "./allData/TutorialData";
import TutorialCard from "./TutorialCard";
import "./tutorials.css";

function Tutorials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="tutorials-page-sub">
        {tutorialData.map((t) => (
          <div key={t.id} className="tutorials-card">
            <TutorialCard
              title={t.title}
              img={t.img}
              features={t.features}
              fakePrice={t.fakePrice}
              price={t.price}
              id={t.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Tutorials;
