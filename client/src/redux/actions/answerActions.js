import * as actionTypes from "../actions/actionTypes"
import API from "../../utils/API"


export const getAnswersByQuestionId=(id)=>async(dispatch)=>{

    try {
  
         let {data}=await API.get(`/api/questions/${id}/answers` )
  
         dispatch(getAnswersSuccess(data))
      
    } catch ({response:{data}}) {
         dispatch(getAnswersFail(data))
    }
  }
  
  
  export const getAnswersSuccess=(data)=>{
   return{
     type:actionTypes.GET_ALL_ANSWERS_SUCCESS,
     payload:data
   }
  }
  export const getAnswersFail=(message)=>{
   return{
     type:actionTypes.GET_ALL_ANSWERS_FAIL,
     payload:message
   }
  }