import React from 'react';
import iphone from '../../assets/images/iphone.webp'

const ProjectSummary = ({project}) => {
    
    return (
        <div className="card z-depth-0 project-summary">
            <dv className="card-content grey-text text-darken-3 container">
                <span className="card-title">{project.title}</span>
                <span>{project.image ? <img src={project.image} width='60%' className="fluid" alt="iphonex"/>:null}</span>
                <p>blah blah blah</p>
                <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">7th May 2020, 5:00 P.M</p>
            </dv>
        </div>
    )
}

export default ProjectSummary