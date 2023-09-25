import { createContext, useCallback, useEffect, useState} from "react";
import baseUrl, { GetRequest, PostRequest } from "../utils/Service";


export const AuthContext = createContext()


export const AuthProvider =({children})=>{
   const[conversation,SetConversation]= useState([])
  const[User,SetUser]=useState(null)
  const[UserProfile,SetUserProfile]=useState("")
    const [registerinfo,SetRegisterinfo]=useState({
        fullname:"",
        email:"",
        password:"",
        UserType:"",
        SecretKey:""
     })

     useEffect(()=>{
        const user = localStorage.getItem("user")
         SetUser(JSON.parse(user))
    },[User])
     const[RegisterError,SetregisterError]=useState("")
     const[isRegisterLoading,SetisRegisterLoading]=useState(false)
    const UpdateRegisterinfo=useCallback((info)=>{
        SetRegisterinfo(info)
    },[])
 
    const Reisteruser=useCallback(async(e)=>{
        e.preventDefault();
          try{
            SetisRegisterLoading(true)
            SetregisterError(null)
            const response = await PostRequest(`${baseUrl}/user/register`,registerinfo)
            SetisRegisterLoading(false)
            if(response.Error){
                return SetregisterError(response)
            }
            localStorage.setItem("user",JSON.stringify(response))
            SetUser(response)
            SetRegisterinfo('')
          }catch(err){
             return SetregisterError(err) ,SetisRegisterLoading(false),SetRegisterinfo('')
          }
    },[registerinfo])

       const[Logininfo,SetLogininfo]=useState({
        email:"",
        password:""
       })
       const[isLoginLoading,SetisLoginLoading]=useState(false)
       const[LoginError,SetLoginError]=useState(null)
       const UpdateLogin=useCallback((info)=>{
        SetLogininfo(info)
       },[])
       async  function GetImage(){
        try{
        
           if(User === null){
              console.log("picture")       
           }else{
            const response= await GetRequest(`${baseUrl}/user/one/${User?._id}/picture`)
            SetUserProfile(JSON.stringify(response))
            localStorage.setItem("picture",JSON.stringify(response))
        
           }
          
        }catch(err){
         return console.log("err",err)
      }
      }
      
        const LoginUser =useCallback(async(e)=>{
        e.preventDefault()
        try{
             SetisLoginLoading(true)
             SetLoginError(null)
             const response = await PostRequest(`${baseUrl}/user/login`,Logininfo)
             SetisLoginLoading(false)
             if(response.Error){
                return SetLoginError(response)
             }
             localStorage.setItem("user",JSON.stringify(response))
             SetUser(response)
             SetLogininfo('')
        }catch(err){
            return SetLoginError(err) , SetisLoginLoading(false),SetLogininfo('')
         }
       },[Logininfo])
     
       useEffect(()=>{
        GetImage()
       },[LoginUser])
       const Adminregisteruser=useCallback(async(e)=>{
        e.preventDefault();
          try{
            SetisRegisterLoading(true)
            SetregisterError(null)
            const response = await PostRequest(`${baseUrl}/user/register`,registerinfo)
            SetisRegisterLoading(false)
            if(response.Error){
                return SetregisterError(response)
            }
            SetRegisterinfo('')
          }catch(err){
             return SetregisterError(err) ,SetisRegisterLoading(false),SetRegisterinfo('')
          }
    },[registerinfo])
    const Logout=useCallback(()=>{
      localStorage.removeItem("user")
      localStorage.removeItem("theme")
      localStorage.removeItem("activities")
      localStorage.removeItem("cartItems")
      localStorage.removeItem("chats")
      localStorage.removeItem("picture")
      localStorage.removeItem("conversation")
      SetUser(null)
    },[])
  
    useEffect(()=>{
      const profile =localStorage.getItem("picture")
      SetUserProfile(JSON.parse(profile))
    },[User])
      
    useEffect(() => {

		const fetchConversations = async () => {
		try{
        if(conversation ){
         const response = await fetch(`${baseUrl}/api/conversations/${User?._id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
			});

			const resData = await response.json()
			SetConversation(resData)
         localStorage.setItem("conversation",JSON.stringify(resData))
        }
      }catch(err){
         console.log("err",err)
      }
		}
		fetchConversations()
	}, [User])
   useEffect(()=>{
      const Conversation = localStorage.getItem("conversation")
       SetConversation(JSON.parse(Conversation))
  },[conversation])
    
     return(
        <AuthContext.Provider value={{registerinfo,SetRegisterinfo,UpdateRegisterinfo,Reisteruser,RegisterError,isRegisterLoading,User,Logininfo,UpdateLogin,LoginUser,LoginError,isLoginLoading,Adminregisteruser,Logout,SetUser,SetUserProfile,UserProfile,conversation,SetConversation}}>
            {children}
        </AuthContext.Provider>
      )
}
