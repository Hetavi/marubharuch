import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/doctorActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {

    name: '',
    sp: '',
    visitday: '',
    visitHr: '',
    stats: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
   
  }
  handleSubmit = (e) => {
    e.preventDefault();
 
    this.props.createProject(this.state);
    this.props.history.push('/');
   // window.open("http://wa.me/91" + this.state.mobile + "?text=Hi "+this.state.name+", Thank you for choosing us to take care of your "+this.state.modelno+" Your Repair id is "+this.state.mobile +". For any query please contact us on: 9898421074");
  }
  render() {

    const { auth } = this.props;
  
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">New Visiting Dr </h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label className="grey-text text-darken-3" htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" id='sp' onChange={this.handleChange} />
            <label htmlFor="sp">Speciality</label>
          </div>
          <div className="input-field">
            <input type="text" id='visitday' onChange={this.handleChange} />
            <label htmlFor="visitday">Visit Day/Days</label>
          </div>
          <div className="input-field">
            <input type="text" id='visitHr' onChange={this.handleChange} />
            <label htmlFor="visitHr">Sim card</label>
          </div>
         
          <div className="input-field">
            <button className="btn pink lighten-1">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
