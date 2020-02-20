import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
<<<<<<< Updated upstream
      <li><NavLink to='/edit'>All Jobs</NavLink></li>
        <li><NavLink to='/create'>New Dr</NavLink></li>
        <li><NavLink to='/createHosp'>New Hosp</NavLink></li>
=======
      <li><NavLink to='/edit'>Old Notices</NavLink></li>
        <li><NavLink to='/create'>New Notice</NavLink></li>
      
>>>>>>> Stashed changes
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
        
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
