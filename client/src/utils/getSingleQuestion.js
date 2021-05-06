import API from "./API"

export const getSingleQuestion=async (id)=>{
    
    try {
        let {data:{data}}=await API.get( `/api/questions/${id}/`)
         return data[0]
        
    } catch ({response}) {
        console.log(response)
    }
    
}