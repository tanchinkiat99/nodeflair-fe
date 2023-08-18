import { useState, useEffect } from "react";
import JobCard from "./components/job-card/jobCard";
import JobTitle from "./components/job-title/jobTitle";
import jobData from "./data/job_data.json";
import "./App.css";

const MOBILE_VIEWPORT_WIDTH = 720;

function App() {
  const [selected, setSelected] = useState(0);
  const [showRightPanel, setShowRightPanel] = useState(true);

  function handleWindowSizeChange() {
    setShowRightPanel(window.innerWidth > MOBILE_VIEWPORT_WIDTH);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

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

  const renderRightPanel = () => {
    return (
      showRightPanel && (
        <div className="right-column">
          <JobTitle title={jobData[selected].title} />
        </div>
      )
    );
  };
  return (
    <div className="root">
      <div className="left-column">{renderJobCards()}</div>
      {renderRightPanel()}
    </div>
  );
}

export default App;
