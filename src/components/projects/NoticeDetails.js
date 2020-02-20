import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { editNoticeActions } from '../../store/actions/editNoticeActions'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
{/* use for edit notice */ }
class NoticeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: this.props.project.dept,
      title: this.props.project.title,
      Body1: this.props.project.Body1,
      Body2: this.props.project.Body2,
      Body3: this.props.project.Body3,
      docid: this.props.docid,
      displayon: this.props.project.displayon,
      diss: false
    }
  }
  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handlecheckbox = (e) => {
    console.log(this.state.displayon)
    if (e.target.checked) {
      this.setState({ displayon: true })
    }
    else {
      this.setState({ displayon: false });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editNoticeActions(this.state);
    this.props.history.push('/');
  }
  componentDidMount() {
    if (this.props.auth.uid) {
      this.setState({ diss: false });
    } else {
      this.setState({ diss: true });
    }
  }
  render() {
    console.log(this.props.auth.uid)
    //if (!auth.uid) return <Redirect to='/signin' /> 
    //if (project) {xx
    return (
      <div className="container section project-editing">
        { (this.state.diss ?<h4>Notice</h4>  : <h4>Edit Notice</h4>) }
        <form className="white" disabled={this.state.diss} onSubmit={this.handleSubmit}>
          <div className="card z-depth-0">
            <div className="card-content" style={{ padding: '2px' }}>
              <span style={{ textAlign: "center" }} disabled={this.state.diss} > Dept:{this.props.project.dept}  </span>
              <div className="input-field col s6 m4 " style={{ display: (this.state.diss ? 'none' : 'block') }}>
                <input id="displayon" type="checkbox" className='filled-in  ' onChange={this.handlecheckbox} />
                <span>Display On</span>
              </div>
              <div className="input-field col s6 m4 " >
                <button className="btn-small pink  lighten-1" style={{ display: (this.state.diss ? 'none' : 'block') }} disabled={this.state.diss} >Save</button>
              </div>
            </div>
            <div  className="input-field ">
             <b> Title <input type="text" id='title' disabled={this.state.diss} defaultValue={this.state.title} onChange={this.handleChange} />
              </b>
            </div>
            <div className="input-field ">
              <textarea id='Body1' style={{ height: '20rem' }} disabled={this.state.diss} defaultValue={this.state.Body1} onChange={this.handleChange} />
              <label className='active' htmlFor="Body1">Body</label>
            </div>
            {  /*  <div className="input-field ">
              <textarea id='Body2' style={{ height: '10rem' }}   disabled={this.state.diss} defaultValue={this.state.Body2} onChange={this.handleChange} />
              <label className='active' htmlFor="Body1">Para-2</label>
            </div>
            <div className="input-field ">
              <textarea id='Body3' style={{ height: '10rem' }}  disabled={this.state.diss} defaultValue={this.state.Body3} onChange={this.handleChange} />
              <label className='active' htmlFor="Body3">Para-3</label>
    </div>*/}
            <div className="input-field col s6 m4 " >
              <button className="btn-small pink  lighten-1" style={{ display: (this.state.diss ? 'none' : 'block') }} disabled={this.state.diss} >Save</button>
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
          </div>
        </form>
      </div>
    )
  }
  //}
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.notice;
  const project = projects ? projects[id] : null
  return {
    docid: id,
    project: project,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editNoticeActions: (project) => dispatch(editNoticeActions(project))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(NoticeDetails)
