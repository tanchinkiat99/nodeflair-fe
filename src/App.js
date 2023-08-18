import "./App.css";
import JobCard from "./components/job-card/jobCard";
import JobTitle from "./components/job-title/jobTitle";
import jobData from "./data/job_data.json";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(0);

  const renderJobCards = () => {
    return jobData.map((job, index) => {
      return (
        <JobCard
          data={job}
          key={index}
          selected={selected === index}
          handleOnClick={() => setSelected(index)}
        />
      );
    });
  };
  console.log(window.innerWidth);
  return (
    <div className="root">
      <div className="left-column">{renderJobCards()}</div>
      <div className="right-column">
        <JobTitle title={jobData[selected].title} />
      </div>
    </div>
  );
}

export default App;
