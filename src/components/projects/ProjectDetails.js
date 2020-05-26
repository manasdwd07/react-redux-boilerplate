import React from 'react';
import iphone from '../../assets/images/iphone.webp';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

function ProjectDetails(props) {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to="/signin" />
    if (project) {
        return (
            <div>

                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{project.title}</span>

                        </div>
                        <div className="card-action grey lighten-3 ">
                            {project.image ? <div style={{ 'backgroundColor': 'white' }}><img src={iphone} width='100%' className="fluid" /></div> : null}
                            <p>Reviews:- {project.content}</p>
                            <p>Price:-  {project.price}</p>
                            <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
                            <div>{moment(project.createdAt.toDate().toString()).calendar()}</div>
                        </div>
                    </div>
                </div>
            </div>)
    }
    else {

        return (
            <div className="container section center">Loading Project...</div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
