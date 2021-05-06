import * as actionTypes from "../actions/actionTypes"

const initialState={
  
    allAnswers:[],
    getAllAnswersError:"",

    
}
export const answerReducer=(state=initialState,action)=>{
    switch (action.type) {
        
        case actionTypes.GET_ALL_ANSWERS_SUCCESS:
            return {...state,allAnswers:action.payload,getAllAnswersError:""}

        case actionTypes.GET_ALL_ANSWERS_FAIL:
            return {...state,allAnswers:[],getAllAnswersError:action.payload}

        default:
            return {...state}
            
    }
}