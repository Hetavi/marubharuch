import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar1 from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Dashboard1 from './components/dashboard/Dashboard1'
<<<<<<< Updated upstream
import ProjectDetails from './components/projects/ProjectDetails'
import ProjectDetails1 from './components/projects/ProjectDetails1'
=======

import NoticeDetails from './components/projects/NoticeDetails'
import CreateNotice from './components/projects/CreateNotice'
>>>>>>> Stashed changes
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateVisitngDr from './components/projects/CreateVisitngDr'
import CreatingHosp from './components/projects/CreateHosp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar1 />
          <Switch>
           <Route exact path='/'component={Dashboard} />
            <Route  exact path='/edit'component={Dashboard1} />
<<<<<<< Updated upstream
            
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/edit/:id' component={ProjectDetails1} />
=======
            <Route  exact path='/admin'component={CreatingHosp} />
           
            <Route path='/edit/:id' component={NoticeDetails} />
>>>>>>> Stashed changes
             <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateVisitngDr} />
            <Route path='/createHosp' component={CreatingHosp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
