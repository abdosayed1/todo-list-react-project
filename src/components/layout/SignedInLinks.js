import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const SignedInLinks = (props) => {
  //console.log(props.userInit)
  let init = [];
  if(props.users){
    const users = [...props.users];
    
    const myAuth = props.auth;
    init = users.filter(user => {
      return user.id == myAuth.uid
    });
    //console.log(init);
  }
  return (
    <ul className='right'>
      <li><NavLink to='/newproject'>new project</NavLink></li>
      <li><a onClick={props.signOut}>log out</a></li>
      <li><NavLink to='/' className='btn btn-floating bluegrey darken-3'>{init[0] ? init[0].initials : 'user'}</NavLink></li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  //console.log(state);
  return{
    users: state.firestore.ordered.users,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    { collection: 'users' }
  ])
)(SignedInLinks);