import React, { Component } from 'react'

export class SignIn extends Component {
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
        if(this.state.password!=this.state.confirmPassword){
            alert('Password and Confirm Password should be the same')
        }
        else{
            console.log(this.state);
        }
        
    }
    render() {
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
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten z-depht-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
