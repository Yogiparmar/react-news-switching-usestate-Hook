import React, { Fragment } from "react";
import { businessHeadlines } from "../assets/Data";

const Business = () => {
  return (
    <Fragment>
      <div className="news-heading">
        <h3>Business</h3>
      </div>
      <ul className="news-list">
        {businessHeadlines.map((Line, i) => {
          return <li key={i}>👉 {Line}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default Business;
