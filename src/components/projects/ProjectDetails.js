import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (

        <div>

            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title-{id}</span>
                        <p>Proident labore esse sint ad elit laborum qui cillum.Do anim veniam nisi cillum ea voluptate incididunt Lorem ullamco ullamco minim.Officia exercitation dolore fugiat sit occaecat quis consequat labore magna.</p>
                    </div>
                    <div className="card-action grey lighten-3 grey-text">
                        <div>Posted By Manas Dwivedi</div>
                        <div>7th May 5 PM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
