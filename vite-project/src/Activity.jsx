import "./activity.css";
import ActivityCard from "./ActivityCard";
import activityData from "./allData/ActivityData";

function Activity() {
  return (
    <>
      <div className="page-sub-activity">
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
      </div>
    </>
  );
}

export default Activity;
