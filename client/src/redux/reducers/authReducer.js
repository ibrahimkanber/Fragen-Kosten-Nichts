import * as actionTypes from "../actions/actionTypes"

const initialState={
    userData:{},
    loginStatus:false,
    loginErrorMessage:"",
    logoutErrorMessage:"",
    signUpErrorMessage:""
}
export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {...state,loginStatus:true,loginErrorMessage:"",userData:action.payload}
        case actionTypes.LOGIN_FAILED:
            return {...state,loginStatus:false,loginErrorMessage:""}
        
        case actionTypes.LOGOUT:
            return {...state,loginStatus:false,loginErrorMessage:"",logoutErrorMessage:""}

        case actionTypes.SIGNUP_SUCCESS:
            return {...state,loginStatus:true,signUpErrorMessage:""}
        case actionTypes.SIGNUP_FAIL:
            return {...state,loginStatus:false,signUpErrorMessage:action.payload}
        
        default:
            return {...state}
            
    }
}