import React from 'react'
import moment from 'moment'

const DrSummary1 = ({ project4 }) => {

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card-panel teal">
          <span className="white-text">Name:<span className="yellow-text">{project4.name}</span></span>
          <div><span className="white-text">Speciality-{project4.sp}</span></div>
          {/* following visting day sholud be print on all doctors list */}
          <div><span className="white-text">{project4.visitHr}</span>-<span>{project4.visitday[0]}</span>
          {project4.visitday[1]? <span>,{project4.visitday[1]}</span> :null  }
          {project4.visitday[2]? <span>,{project4.visitday[2]}</span> :null  }
          {project4.visitday[3]? <span>,{project4.visitday[3]}</span> :null  }
          {project4.visitday[4]? <span>,{project4.visitday[4]}</span> :null  }
          {project4.visitday[5]? <span>,{project4.visitday[5]}</span> :null  }
          {project4.visitday[6]? <span>,{project4.visitday[6]}</span> :null  }
          </div>
        </div>
      </div>
    </div>
  )

}

export default DrSummary1
