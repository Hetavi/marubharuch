import React, { Component } from 'react'

import ProjectList1 from '../projects/ProjectList'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.projects
    }
  }
  render() {
   // const { projects, auth } = this.props;
    console.log('dashbord 1--.js')
    console.log('p')
    console.log(this.state.data)
    console.log('p')

    //remove remark tag if auth people only read
   // if (!auth.uid) return <Redirect to='/signin' />  
   
    return (
    
      <div className="dashboard1 container">
       
        <div className="row">
      
         <h3>kjlk</h3>
          <div className="col s12 m6">
           
            <ProjectList1 projects={this.state.data} />
            
          
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('dashbord 1--.js mapStateToProps')
  
  return {
    projects: state.firestore.ordered.ganesh,
    auth: state.firebase.auth
   
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'visitingDr',
    where: [
      ['visitday', '==','Sat']
   ]
   }
   // { collection: 'ganesh', orderBy: ['createdAt', 'desc']}
   
  ])
)(Dashboard1)
