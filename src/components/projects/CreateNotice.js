import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateNotice } from '../../store/actions/noticeActions'
import { Redirect } from 'react-router-dom'
class CreateNotice extends Component {
  state = {
    dept: '',
    title: '',
    Body1: '',
    Body2: '',
    Body3: '',
    displayon: true
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(e.target.value)
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
    this.props.generateNotice(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container section project-editing">
      <h3>New Notice   </h3>
      <form className="white" onSubmit={this.handleSubmit}>
        <div className="card z-depth-0">
          <div className="card-content" style={{ padding: '2px' }}>
            <label>
              <input id="displayon" type="checkbox" className='filled-in' onChange={this.handlecheckbox} />
              <span>Display On</span>
            </label>
          </div>
          <div className="input-field ">
            <input type="text" id='dept'  onChange={this.handleChange} />
            <label  htmlFor="dept">Department</label></div>
          <div className="input-field ">
            <input type="text" id='title'  onChange={this.handleChange} />
            <label  htmlFor="title">title</label></div>
          <div className="input-field ">
            <textarea id='Body1' style={{ height: '20rem' }}  onChange={this.handleChange} />
            <label  htmlFor="Body1">Body</label>
          </div>
         {/* <div className="input-field ">
            <textarea id='Body2' style={{ height: '10rem' }}  onChange={this.handleChange} />
            <label  htmlFor="Body1">Para-2</label>
          </div>
          <div className="input-field ">
            <textarea id='Body3' style={{ height: '10rem' }}  onChange={this.handleChange} />
    <label  htmlFor="Body3">Para-3</label>
          </div>   */}      
          <div className="input-field">
            <button className="btn pink lighten-1">Save</button>
          </div>
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
    generateNotice: (project) => dispatch(generateNotice(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNotice)
