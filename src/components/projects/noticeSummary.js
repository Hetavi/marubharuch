import React from 'react'
import moment from 'moment'
const noticeSummary1 = ({ project4 }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card-panel teal">
          <span className="white-text">DEPT<span className="yellow-text">{project4.dept}</span></span>
          <div><span className="white-text">TITLE</span><span className="yellow-text">{project4.title}</span></div>
          {/* following visting day sholud be print on all doctors list */}
  <div><span className="white-text">by {project4.authorFirstName} {project4.authorLastName} {moment(project4.createdAt.toDate()).calendar()}</span>-
          
          </div>
        </div>
      </div>
    </div>
  )
}
export default noticeSummary1
