import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = (props) => {
  //console.log(props);
  return(
    <div className='project-list section'>
      <div className='card project-summary'>
        <div className='card-content gray-text text-darken-3'>
          <Link to={'/project/' +props.id} className='card-title'>{props.title}</Link>
          <p>{props.content}</p>
          <p className='blue-grey-text'>2nd mar, 5am</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary;