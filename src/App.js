import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar1 from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Dashboard1 from './components/dashboard/Dashboard1'
import ProjectDetails from './components/projects/ProjectDetails'
import ProjectDetails1 from './components/projects/ProjectDetails1'
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
            
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/edit/:id' component={ProjectDetails1} />
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
