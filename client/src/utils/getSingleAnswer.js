import API from "./API"

export const getSingleAnswer=async (questionId,answerId)=>{
    
    try {
        let {data:{data}}=await API.get( `/api/questions/${questionId}/answers/${answerId}`)
        //console.log(data)
         return data
        
    } catch ({response}) {
        console.log(response)
    }
    
}