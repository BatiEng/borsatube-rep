import Hero from "./Hero";
import ActivityCard from "./ActivityCard";
import activityData from "./allData/ActivityData";
import tutorialData from "./allData/TutorialData";
import TutorialCard from "./TutorialCard";
import Support from "./Support";
import { useEffect } from "react";

function Home() {
  return (
    <div className="container">
      <Hero />
      <h1 className="section-title">Eğitimler</h1>
      <div className="tutorial-container">
        {tutorialData.map((t) => (
          <div key={t.id} className="tutorial-container-sub">
            <TutorialCard
              id={t.id}
              title={t.title}
              img={t.img}
              features={t.features}
              fakePrice={t.fakePrice}
              price={t.price}
            />
          </div>
        ))}
      </div>
      <hr />

      <h1 className="section-title">Seminerler</h1>
      {activityData.map((a) => (
        <div key={a.id}>
          <ActivityCard
            title={a.title}
            instructor={a.instructor}
            description={a.description}
            img={a.img}
          />
        </div>
      ))}

      <Support />
    </div>
  );
}

export default Home;
