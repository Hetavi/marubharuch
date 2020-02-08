import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createProject } from '../../store/actions/projectActions'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import firebase from '../../config/fbConfig'
class ProjectDetails1 extends Component {
 
  
  handleChange = (e) => {
 
    this.setState({
      [e.target.id]: e.target.value
      
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();    
   const { name, mobile } = this.state;
   
    //this.props.createProject(this.state);
    const updateRef = firebase.firestore().collection('ganesh').doc(this.props.id1);
    updateRef.set({
      name,
      mobile
    }, { merge: true })
    this.props.history.push('/');
  }
  render() {
    const { project, auth, id1 } = this.props;
  
    return (
      <div className="container">
        project details1
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Edit Project</h5>x
  <label htmlFor="title">Project Details{id1}</label>
          <div className="input-field">
            <input type="text" id='name' defaultValue={project.name} onChange={this.handleChange} />
            <input type="text" key='id' defaultValue={id1} onChange={this.handleChange} />
          </div>
          <label >First Name</label>
          <div className="input-field">
            <textarea id="mobile" placeholder={project.mobile} className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>






          
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;
  const projects = state.firestore.data.ganesh;
  const project = projects ? projects[id] : null

  return {
    id1: id,
    project: project,
    auth: state.firebase.auth
    
  
  }
 
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails1)