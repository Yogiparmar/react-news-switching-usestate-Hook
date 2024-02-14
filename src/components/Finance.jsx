import React, { Fragment } from "react";
import { financeHeadlines } from "../assets/Data";

const Finance = () => {
  return (
    <Fragment>
      <div className="news-heading">
        <h3>Finance</h3>
      </div>
      <ul className="news-list">
        {financeHeadlines.map((Line, i) => {
          return <li key={i}>👉 {Line}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default Finance;
