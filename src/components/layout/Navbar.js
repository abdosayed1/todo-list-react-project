import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  //console.log(auth);
  const links = () => {
    if(auth.isEmpty){
      return(<SignedOutLinks />);
    }else{
      return(<SignedInLinks />);
    }
  }
  return (
    <nav className='nav-wrapper deep-purple darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>todo list</Link>
        {links()}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);