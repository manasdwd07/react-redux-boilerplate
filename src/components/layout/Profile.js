import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


const Profile = (props) => {
    const { profile, auth, user } = props;
    if (!auth.uid) return <Redirect to="/signin" />
    return (
        <div>
            {user ?
                <div className="container section">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title">
                                <h5 className="center-align">{user.firstName} {user.lastName}</h5>                         </div>
                        </div>
                        <div className="card-content">
                            <div className="card-action">
                                Welcome to PhonoBase {user.firstName} , we at phonobase ensure that each of our user is quite satisfied with whatever gadget
                                they want to buy. So, we present you top latest reviews of nearly all the new products upcoming in the market. 
                                Have a look at the reviews given by our users and also you can add your own review once you purchase that dream product of yours.
                                Please go through the reviews related to the product of your choice to ensure every feature beforehand.

                                We are pleased to serve you.<br/><br/>
                                Enjoy PhonoBase :)
                        </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    console.log(id)
    const users = state.firestore.data.users;
    const user = users ? users[id] : null;
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        user: user
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(Profile)