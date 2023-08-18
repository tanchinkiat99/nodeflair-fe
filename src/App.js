import "./App.css";
import JobCard from "./components/job-card/jobCard";
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

  return (
    <div className="root">
      <div className="left-column">{renderJobCards()}</div>;
    </div>
  );
}

export default App;
