import React, { Fragment } from "react";
import { politicalHeadlines } from "../assets/Data";

const Political = () => {
  return (
    <Fragment>
      <div className="news-heading">
        <h3>Political</h3>
      </div>
      <ul className="news-list">
        {politicalHeadlines.map((Line, i) => {
          return <li key={i}>👉 {Line}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default Political;
