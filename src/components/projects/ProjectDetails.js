import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'

const ProjectDetails= (props) => {
  const id = props.match.params.id;
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/login' /> 
  
  if (props.projects){
    //console.log(props.projects);
    const { projects } = props;
    const myProject = projects[id];
    //console.log(myProject);
    return(
      <div className='container section  project-detail'>
        <div className='card'>
          <div className='card-content gray-text text-darken-3'>
            <span className='card-title'>project title - {myProject.title}</span>
            <p>{myProject.description}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>{myProject.authorFirstName}</div>
            <div>2nd mar, 5am</div>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className='container section'>
        loading
      </div>
    )
  }
  
}
const mapStateToProps = (state) => {
  return{
    projects: state.firestore.data.projects,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'projects' }
  ])
)(ProjectDetails);