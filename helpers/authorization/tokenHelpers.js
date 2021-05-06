const sendJwtToClient=(user,response)=>{

    //console.log(user)
    const token=user.generateJwtFromUser();
    const {JWT_COOKIE,NODE_ENV}=process.env;
    // console.log(JWT_COOKIE)
    return response
    .status(200)
    .cookie("access_token",token,{
        httpOnly:true,
        exprires:new Date(Date.now()+parseInt(JWT_COOKIE)*1000*60),
        secure:NODE_ENV==="development" ? false:true
    })
    .json({
        success:true,
        access_token:token,
        data:{
            name:user.name,
            email: user.email,
            blocked:user.blocked,
            id:user._id
        }
    })

}


const isTokenIncluded=(req)=>{
    if (req.headers.cookie==undefined){
        return false
    }
    return true
}

const getAccessTokenFromHeader=(req)=>{
    const cookie=req.headers.cookie;
    //console.log(cookie)
    const access_token=cookie.split("=")[1]
    //console.log(access_token)
    return access_token

}

module.exports= {sendJwtToClient,isTokenIncluded,getAccessTokenFromHeader};