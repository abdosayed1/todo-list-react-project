import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import { connect } from 'react-redux'


function App(props) {
  const { isLoaded } = props.auth;
  if(isLoaded){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/newproject' component={CreateProject} />
            <Route path='/login' component={SignIn} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }else{
    //console.log('firebase is not loaded yet');
    return(
      <div>
        loading
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
