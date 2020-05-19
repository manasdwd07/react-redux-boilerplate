
const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login Error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success');
            return state

        case 'SIGNUP_SUCCESS':
            console.log('Signup success');
            return {
                ...state,
                authError:null
            }
        
        case 'SIGNUP_ERROR':
            console.log('Signup failed');
            return {
                ...state,
                authError:action.err.message
            }
        
        case 'FORGOT_SUCCCESS':
            console.log('Link has been sent')
            return{
                ...state,
                authError:null
            }
        
        case 'FORGOT_ERROR':
                console.log('Some error occured while sending link please check again')
                return {
                    ...state,
                    error:action.err.message
                }
        
        default:
            return state
    }
    
}

export default authReducer