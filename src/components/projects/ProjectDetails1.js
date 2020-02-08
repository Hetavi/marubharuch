import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { editProject } from '../../store/actions/editProject'

import { Redirect } from 'react-router-dom'
import moment from 'moment'

class ProjectDetails1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actual: this.props.project.actual,
      mobile: this.props.project.mobile,
      Notes: this.props.project.Notes,
      radyon: this.props.project.radyon,
      deliveredon: this.props.project.deliveredon,
      whatsapp: '',
      docid: this.props.docid,
      data:this.props.project
    }

  }
  handleChange = (e) => {
    console.log(this.state.data)
    this.setState({
      [e.target.id]: e.target.value
    })

  }
  handleChange1 = (e) => {
    e.preventDefault();
    const cid = [e.target.id]
    this.state.whatsapp = "sssss"
    switch (e.target.id) {
      case "aa1":

        this.state.whatsapp = 'Hi, Your ' + this.props.project.modelno + ' with Repair Id-' + this.state.mobile + ' is sucessfully repaired and ready to collect. The final cost is Rs.-' + this.state.actual + '. For any query please contact us on 9898421074';
        console.log('whatsapp');
        break;
      case "aa2":
        this.state.whatsapp = 'Dear customer, we are unable to repair your ' + this.props.project.modelno + '. Pleasecollect it from our store. For any query please contact us on: 9898421074';
        console.log('whatsapp');
        break;
      case "aa3":
        console.log('33333333');
        this.state.whatsapp = 'Dear customer, Thank you for collacting ' + this.props.project.modelno + '. For any query please contact us on: 9898421074';
        this.state.radyon='yes'
        break;
      case "aa4":
        console.log('4444444');
        this.state.whatsapp = 'Dear customer, Thank you for collacting your phone with repair id ' + this.state.mobile + ' and paying Rs.' + this.state.actual + '. For any query please contact us on 9898421074';
        this.state.radyon='yes'
        break;

      default:
        console.log('default')

    }
    
      this.state.Notes='Msg Send-' + new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear() + '\n' + this.state.Notes,
  
    console.log(this.state.whatsapp)
    this.props.editProject(this.state);
    window.open("http://wa.me/91" + this.state.mobile + "?text=" + this.state.whatsapp);
  }
 
 
 
 
  handleChange2 = (e) => {
    this.setState({
      
      radyon:'yes',
     Notes:'Delivered on-'+new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+'\n'+this.state.Notes
    })
    console.log(this.state)
  
  }


  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.editProject(this.state);
    this.props.history.push('/');
  }
  render() {
    //if (!auth.uid) return <Redirect to='/signin' /> 
    //if (project) {xx
    return (
      <div className="container section project-editing">
        <h3>Details New</h3>

        <form className="white" onSubmit={this.handleSubmit}>

          <div className="card z-depth-0">

            <div className="card-content">
              <span >
                Name:{this.props.project.name},Mob.{this.props.project.mobile},Rec.on,
              {moment(this.props.project.createdAt.toDate()).calendar()},
              Estimate{this.props.project.estimate},Problem:{this.props.project.problem}
                Model-{this.props.project.modelno},Battery-{this.props.project.battery},Sim-{this.props.project.sim},Memory-{this.props.project.memorycard}
              </span>     </div>
            <div className="input-field ">
              <input type="Number" id='actual' defaultValue={this.state.actual} onChange={this.handleChange} />
              <label className='active' htmlFor="actual">Bill Amount</label></div>
            <div className="input-field hide ">
              <input type="text" id='radyon' defaultValue={this.state.radyon} onChange={this.handleChange2} />
              <label className='active' htmlFor="radyon">Deliverd ?</label>


            </div>

            <div className="input-field ">
              <textarea id='Notes' defaultValue={this.state.Notes} onChange={this.handleChange} />
              <label className='active' htmlFor="Notes">Notes</label>
            </div>

{/*
            <label>
              <input type="checkbox" id='aa' onChange={this.handleChange1} />
              <span>Job Finished </span>
            </label>
            <label>
              <input type="checkbox" id='bb' onChange={this.handleChange2} />
              <span>Delivered </span>

</label>*/}



            <label>
              <button id='aa1' className="btn-small pink lighten-1" onClick={this.handleChange1}>Repaired</button>
              <button id='aa2' className="btn-small red lighten-1" onClick={this.handleChange1}>Unable </button>
            </label><label>
              <button id='aa3' className="btn-small pink lighten-1" onClick={this.handleChange1}>Return</button>
              <button id='aa4' className="btn-small green lighten-1" onClick={this.handleChange1}>Payment</button>
            </label>


            <div className="input-field">
              <button className="btn pink lighten-1">Back</button>
            </div>

            <div className="card-action grey lighten-4 grey-text">
            </div>
          </div>
        </form>

      </div>
    )
  }
  //}
}

const mapStateToProps = (state, ownProps) => {


  const id = ownProps.match.params.id;
  const projects = state.firestore.data.ganesh;
  const project = projects ? projects[id] : null

  return {
    docid: id,
    project: project,
    auth: state.firebase.auth
  }

}
const mapDispatchToProps = dispatch => {
  return {
    editProject: (project) => dispatch(editProject(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails1)
