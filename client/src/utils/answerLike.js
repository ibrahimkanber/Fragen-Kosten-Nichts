import API from "./API"

export const answerLike=async (questionId,answerId)=>{
    
    try {
        let {data:{data}}=await API.get(  `/api/questions/${questionId}/answers/${answerId}/like` )
         return data
        
    } catch ({response}) {
        console.log(response)
    }
    
}
export const answarUndoLike=async (questionId,answerId)=>{
    
    try {
        let {data:{data}}=await API.get(  `/api/questions/${questionId}/answers/${answerId}/undolike` )
         return data
        
    } catch ({response}) {
        console.log(response)
    }
    
}