import React from 'react';
import iphone from '../../assets/images/iphone.webp';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    
    return (
        <div className="card z-depth-0 project-summary">
            <dv className="card-content grey-text text-darken-3 container">
                <span className="card-title">{project.title}</span>
                <span>{project.image ? <img src={project.image} width='60%' className="fluid" alt="iphonex"/>:null}</span>
                <p>{project.content}</p>
                <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
    <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </dv>
        </div>
    )
}

export default ProjectSummary