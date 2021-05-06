import * as actionTypes from "../actions/actionTypes"
import API from "../../utils/API"


export const createQuestion=(title,content)=>async(dispatch)=>{
    
    try {
      
      let {data:{data}}=await API.post("/api/questions/ask",{
          title,content
      })

   
  
      dispatch(questionCreated(data))

  
  
    } catch ({response:{data}}) {

        dispatch(questionCreateFail(data.message))
    }
  
}



export const questionCreated=(data)=>{
  getAllQuestions()
    return{
      type:actionTypes.QUESTION_CREATED,
      payload:data
      
    }
}

export const questionCreateFail=(message)=>{

    return{
      type:actionTypes.QUESTION_CREATE_FAIL,
      payload:message
      
    }
}

///
export const getAllQuestions=()=>async(dispatch)=>{

   try {

        let {data}=await API.get("/api/questions/allquestions?page=1&limit=50")

        dispatch(getAllQuestionsSuccess(data))
     
   } catch ({response:{data}}) {
        dispatch(getAllQuestionsFail(data))
   }
}


export const getAllQuestionsSuccess=(data)=>{
  return{
    type:actionTypes.GET_ALL_QUESTIONS_SUCCESS,
    payload:data
  }
}
export const getAllQuestionsFail=(message)=>{
  return{
    type:actionTypes.GET_ALL_QUESTIONS_FAIL,
    payload:message
  }
}


//

