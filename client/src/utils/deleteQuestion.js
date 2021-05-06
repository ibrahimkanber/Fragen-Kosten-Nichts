import API from "./API"

export const deleteQuestion=async (questionId)=>{
    
    try {
        let {data:{data}}=await API.delete( `/api/questions/${questionId}/delete`)
        console.log(data)
         return data
        
    } catch ({response}) {
        console.log(response)
    }
    
}