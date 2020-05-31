import React from 'react'
import {NavLink} from 'react-router-dom';
import {signOut} from '../../redux_store/actions/authActions';
import {connect} from 'react-redux';


const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/gallery'>Explore the Gallerria !</NavLink></li>
            <li><NavLink to="/create">Add Review !</NavLink></li>
            < li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to={"/profile/"+props.id} key={props.id} className="btn btn-floating orange lighten-1">{props.profile.initials}</NavLink></li>
            
        </ul>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)