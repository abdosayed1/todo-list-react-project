import React, {Component} from 'react';
import Notification from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
  //console.log(state);
  return{
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

class Dashboard extends Component {
  
  render() {
    //console.log(this.props.projects);
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/login' />

    if(this.props.projects){
      return (
        <div className='dashboard container'>
          <div className='row'>
            <div className='col s12 m6'><ProjectList projects={this.props.projects}/></div>
            <div className='col s12 m5 offset-m1'>
              <Notification />
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className='dashboard container'>
          <div className='row'>
            <div className='col s12 m6'>no data yet</div>
            <div className='col s12 m5 offset-m1'>
              <Notification />
            </div>
          </div>
        </div>
      )
    }
    
  }
}



export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'projects' }
  ])
)(Dashboard);