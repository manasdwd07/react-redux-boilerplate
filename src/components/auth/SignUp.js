import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../redux_store/actions/authActions';

export class SignUp extends Component {
    state={
        email:'',
        password:'',
        confirmPassword:'',
        firstName:'',
        lastName:''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.password,"    ",this.state.confirmPassword)
        if(this.state.password!==this.state.confirmPassword){
            alert('Password and Confirm Password should be the same')
        }
        // else if(this.state.password.length<6){
        //     alert('Weak Password, try again with diffrent combination')
        // }
        else{
            this.props.signUp(this.state)
        }
        
    }
    render() {
        const {auth,authError}=this.props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type='text' id='firstName' onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type='text' id='lastName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Confirm Password</label>
                        <input type='password' id='confirmPassword' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten z-depht-0">Sign Up</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError

    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(SignUp)
