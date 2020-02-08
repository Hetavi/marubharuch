import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {


  return (
    <div className="project-list section">
     <div>
    <input type="text" className="input"  placeholder="Search..." />
    </div>

      { projects && projects.map(projectx => {
        
        return (
          
         
         
          <Link to={'/project/' + projectx.id} key={projectx.id}>
          
            <ProjectSummary project={projectx} />
          </Link>
         
          
         
        )
      })}  
     
    </div>
  )
}

export default ProjectList
