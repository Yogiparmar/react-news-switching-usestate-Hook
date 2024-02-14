import React, { Fragment } from "react";
import { historyHeadlines } from "../assets/Data";

const History = () => {
  return (
    <Fragment>
      <div className="news-heading">
        <h3>History</h3>
      </div>
      <ul className="news-list">
        {historyHeadlines.map((Line, i) => {
          return <li key={i}>👉 {Line}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default History;
