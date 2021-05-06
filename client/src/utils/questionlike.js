import API from "./API"

export const questionLike=async (id)=>{
    
    try {
        let {data}=await API.get( `/api/questions/${id}/like`)
        console.log(data)
         return data
        
    } catch ({response}) {
        console.log(response)
    }
    
}
export const undoLike=async (id)=>{
    
    try {
        let {data}=await API.get( `/api/questions/${id}/undolike`)
        console.log(data)
         return data
        
    } catch ({response}) {
        console.log(response)
    }
    
}