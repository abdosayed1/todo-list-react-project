import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    description: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.props);
    this.props.createProject(this.state);

  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/login' /> 
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>creatr a new project</h5>
          <div className='input-field'>
            <label htmlFor='title'>title</label>
            <input type='text' id='title' onChange={this.handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='description'>description</label>
            <textarea className='materialize-textarea' id='description' onChange={this.handleChange}></textarea>
          </div>
          <div className='input-field'>
            <button className='btn pink darken-1'>add project</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
