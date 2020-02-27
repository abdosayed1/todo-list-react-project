import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className='right'>
      <li><NavLink to='/signup'>signup</NavLink></li>
      <li><NavLink to='/login'>login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;