import React, { Fragment } from 'react'
import { educationHeadlines } from '../assets/Data';

const Education = () => {
  return (
    <Fragment>
      <div className="news-heading">
        <h3>Education</h3>
      </div>
      <ul className="news-list">
        {educationHeadlines.map((Line, i) => {
          return <li key={i}>👉 {Line}</li>;
        })}
      </ul>
    </Fragment>
  )
}

export default Education
