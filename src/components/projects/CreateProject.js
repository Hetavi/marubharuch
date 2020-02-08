import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {

    mobile: '',
    name: '',
    modelno: '',
    battery: '',
    simcard: '',
    memorycard: '',
    problem: '',
    estimate: '',
    actual: '',
    radyon: 'No',
    deliveredon: '',
    createdAt: '',
    Notes: ''
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
    window.open("http://wa.me/91" + this.state.mobile + "?text=Hi "+this.state.name+", Thank you for choosing us to take care of your "+this.state.modelno+" Your Repair id is "+this.state.mobile +". For any query please contact us on: 9898421074");
  }
  render() {

    const { auth } = this.props;
  
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Invoice</h5>
          <div className="input-field ">
          <i class="material-icons prefix">phone</i>
            <input  class="red-text" type="text"  id='mobile' onChange={this.handleChange} />
            <label   class="red-text" htmlFor="mobile">Mobile No</label>
          </div>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label className="grey-text text-darken-3" htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" id='modelno' onChange={this.handleChange} />
            <label htmlFor="modelno">Model No</label>
          </div>
          <div className="input-field">
            <input type="text" id='battery' onChange={this.handleChange} />
            <label htmlFor="battery">battery</label>
          </div>
          <div className="input-field">
            <input type="text" id='simcard' onChange={this.handleChange} />
            <label htmlFor="simcard">Sim card</label>
          </div>
          <div className="input-field">
            <input type="text" id='memorycard' onChange={this.handleChange} />
            <label htmlFor="memorycard">Memory Card</label>
          </div>
          <div className="input-field">
            <textarea id="problem" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="problem">problem</label>
          </div>

          <div className="input-field">
            <input type="text" id='estimate' onChange={this.handleChange} />
            <label htmlFor="estimate">Estimate</label>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
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
