import React, { Component } from 'react'
import ProjectList1 from '../projects/ProjectList1'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProjectSummary1 from '../projects/ProjectSummary1'
import DrSummary1 from '../projects/DrSummary1'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: this.props.projects,
      showing: true,
      days: '',
      value: ''
    }
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {

    const { projects, err, auth, value } = this.props;
   // console.log(this.state)
    console.log(this.props)
    console.log('auth')


    //if (!projects) return <Redirect to='/edit' />  

    if (projects) {
      let Reslt = this.props.projects.filter(
        (projet) => { return projet.sp.indexOf(this.state.value) !== -1 || projet.visitday.indexOf(this.state.value) !== -1 }
      )

      console.log('Reslt')
      console.log(Reslt)
      return (
        <div className="dashboard container">
          {this.state.showing
            ? <div>This is visible</div>
            : null
          }
          <div className="row">
            {/*  <div className="col s12 m2">
                            <Notifications notifications={notifications} />
                    </div>
                          <div className="col s12 m2">
                            <ProjectList projects={projects} />
                    </div> */}
            <input type="text" value={value} onChange={this.handleChange} />
            <div className="col s12 m2">

              {Reslt.map(project3 => {
                if (auth.uid) {
                  return (<Link to={'/edit/' + project3.id} key={project3.id}>
                    < DrSummary1 project4={project3} />
                  </Link>)
                }
                else {
                  return (
                    < DrSummary1 project4={project3} key={project3.id} />
                  )
                }
              })
              }
              <ProjectList1 projects={projects} />
            </div>
          </div>
        </div>
      )
    }
    else {
      return (<h1>ha ha ha ....dashboard</h1>)
    }
  }
}

const mapStateToProps = (state) => {
  console.log('dashbord--.js mapStateToProps')
  let dayn = new Date().getDay()
  let daynm = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  console.log(dayn)
  console.log(daynm)
  const dayname = daynm[dayn]
  return {
    projects: state.firestore.ordered.visitingDr,
    auth: state.firebase.auth,
    dayname: dayname
  }
}
export default compose(

  connect(mapStateToProps),
  firestoreConnect( (props)=>[

    // { collection: 'visitingDr', where: [ ['visitday', '==','Sat']  ]   }
    { collection: 'visitingDr', where: [['visitday', 'array-contains', props.dayname]] }

  ])
)(Dashboard)
