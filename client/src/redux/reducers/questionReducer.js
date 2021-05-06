import * as actionTypes from "../actions/actionTypes"

const initialState={
    isQuestionCreated:false,
    createdQuestionData:"",
    questionCreateErrorMessage:"",
    allQuestions:[],
    allQuestionsErrorMessage:""
    
}
export const questionReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.QUESTION_CREATED:
            return {...state,isQuestionCreated:true,createdQuestionData:action.payload,questionCreateErrorMessage:""}
        case actionTypes.QUESTION_CREATE_FAIL:
            return {...state,isQuestionCreated:false,createdQuestionData:"",questionCreateErrorMessage:action.payload}
        case actionTypes.GET_ALL_QUESTIONS_SUCCESS:
            return {...state,allQuestions:action.payload,allQuestionsErrorMessage:""}
        case actionTypes.GET_ALL_QUESTIONS_FAIL:
            return {...state,allQuestions:[],allQuestionsErrorMessage:action.payload}
        default:
            return {...state}
            
    }
}