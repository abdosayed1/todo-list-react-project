import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

const ProjectList = (props) => {
  if (props.projects){
    const projects = [...props.projects];
    const myProjects = projects.map(project => {
      //console.log(project);
      return(
        <ProjectSummary key={project.id} id={project.id} title={project.title} content={project.content} />
      )
    });
    return(
      <div className='project-list section'>
        {myProjects}
      </div>
    )
  }
}

export default ProjectList;