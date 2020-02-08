import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const Edit = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/edit'>Edit</NavLink></li>
    
       
      </ul>
    </div>
  )
}



export default Edit
