import { useState } from "react";
import "./App.css";
import Political from "./components/Political";
import Business from "./components/Business";
import Education from "./components/Education";
import Finance from "./components/Finance";
import History from "./components/History";

function App() {
  const [News, setNews] = useState("Political");
 
  return (
    <>
      <div className="news-box">
        <div className="button-container">
          <button className={`btn ${News === "Political" ? "active" : ""}`} onClick={() => setNews("Political")}>
            Political
          </button>
          <button className={`btn ${News === "History" ? "active" : ""}`}  onClick={() => setNews("History")}>
            History
          </button>
          <button className={`btn ${News === "Education" ? "active" : ""}`} onClick={() => setNews("Education")}>
            Education
          </button>
          <button className={`btn ${News === "Finance" ? "active" : ""}`} onClick={() => setNews("Finance")}>
            Finance
          </button>
          <button className={`btn last-btn ${News === "Business" ? "active" : ""}`} onClick={() => setNews("Business")}>
            Business
          </button>
        </div>
        <div className="news-container">
          {News === "Political" ? (
            <Political />
          ) : News === "Business" ? (
            <Business />
          ) : News === "Finance" ? (
            <Finance />
          ) : News === "History" ? (
            <History />
          ) : (
            <Education />
          )}
          {/* 
          <History />
          < /> */}
        </div>
      </div>
    </>
  );
}

export default App;
