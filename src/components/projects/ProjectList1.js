import React from 'react'
import ProjectSummary1 from './ProjectSummary1'
import { Link } from 'react-router-dom'

const ProjectList1 = ({ projects }) => {
 
  return (
    <div className="project-list section">

      <div >
      <p>Pending Jobs</p>
        {projects && projects.map(project3 => {

          return (

            <Link to={'/edit/' + project3.id} key={project3.id}>
              < ProjectSummary1 project4={project3} />

            </Link>

          )
        })
        }
      </div>
    </div>
  )
}

export default ProjectList1
