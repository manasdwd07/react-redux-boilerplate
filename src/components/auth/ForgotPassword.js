import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux_store/actions/authActions';;


export class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.forgotPassword(this.state);
        setTimeout(() => {
            if (this.props.authError == null) {
                alert('Link has been sent');
                this.props.history.push('/signin')
            }
        }, 3000);

    }

    render() {
        const { authError, auth } = this.props

        if(auth.uid) return <Redirect to="/"/>

        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Forgot Password</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn orange lighten z-depth-0" onClick={this.handleSubmit}>Send Link to reset</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.error,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        forgotPassword: (user) => dispatch(forgotPassword(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
