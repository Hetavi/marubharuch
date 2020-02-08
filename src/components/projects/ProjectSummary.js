import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {

  return (
    <div className="card z-depth-0 project-summary">
     
      <div className="card-content grey-text text-darken-3">
      <span className="blue-text">Name:{project.name},Mob.{project.mobile},Rec.on,{moment(project.createdAt.toDate()).calendar()},Estimate{project.estimate}</span>
          <h5 class="flow-text" >Problem:{project.problem}</h5>
      </div>
    </div>
  )
}

export default ProjectSummary
