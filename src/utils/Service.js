const baseUrl = "http://localhost:5000"
export default baseUrl
 
export const PostRequest =async(url,bodys)=>{
   const response=await fetch(url,{
    headers: {
        'Content-Type': 'application/json'
     }, 
     method:'POST', 
     body:JSON.stringify(bodys)
 })

   const data = await response.json()
   if(!response.ok){
    let message
     if(data?.message){
        message =data.message
     }else{
       message =data 
     }
     return {Error:true,message}
   }
   return data
}

export const GetRequest=async(url)=>{
    const response = await fetch(url)
    const data = await response.json()
    if(!response.ok){
        let message
        if(data?.message){
            message =data.message
        }else{
            message = data
        }
        return {Error:true,message}
    }
    return data
}

export const UpdateRequest = async(url,body)=>{
    const response = await fetch(url,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"PUT",
        body:JSON.stringify(body)
    })
    const data = await response.json()
    if(!response.ok){
        let message
        if(data?.message){
            message = data.message
        }else{
            message = data
        }
        return {Error:true,message}
        }
        return data
}