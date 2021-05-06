import * as actionTypes from "./actionTypes"
import API from "../../utils/API"


export const login=(email,password)=>async(dispatch)=>{
  
   // console.log(email,password)
  try {
    
    const {data:{data}}=await API.post("/api/auth/login",{
        email:email,
        password:password
    })

    dispatch(loginSuccess(data))


  } catch ({response:{data}}) {
     
      dispatch(loginFailed(data.message))
  }
}
export const loginSuccess=(data)=>{
 // console.log(res)
    return{
        type:actionTypes.LOGIN_SUCCESS,
        payload:data
    }
}
export const loginFailed=(message)=>{
    return{
        type:actionTypes.LOGIN_FAILED,
        payload:message
    }
}

export const loginCheck=()=>async(dispatch)=>{

  try {
    
    const {data:{data}}=await API.get("/api/auth/profile")
    //console.log(res)
    dispatch(loginSuccess(data))

  } catch ({response:{data}}) {
     
      dispatch(loginFailed(data.message))
  }
}

////LOGOUT
export const logout=()=>async(dispatch)=>{

  try {
    
    await API.get("/api/auth/logout")
  
    dispatch(logoutSuccess())

  } catch ({response:{data}}) {
     
      dispatch(logoutFailed(data.message))
  }
}

const logoutSuccess=()=>{
  return{
    type:actionTypes.LOGOUT
  }
}
const logoutFailed=(message)=>{
  return{
    type:actionTypes.LOGOUT_FAIL,
    payload:message
  }
}

///signUp

export const signUp=(name,email,password)=>async(dispatch)=>{
    try {
    
    await API.post("/api/auth/register",{
      name,email,password
    })
  
    dispatch(signUpSuccess())

  } catch ({response:{data}}) {
     
      dispatch(signUpFailed(data.message))
  }
}

const signUpSuccess=()=>{
  return{
    type:actionTypes.SIGNUP_SUCCESS
  }
}
const signUpFailed=(message)=>{
  
  return{
    type:actionTypes.SIGNUP_FAIL,
    payload:message
  }
}

///createQuestion





