import React, { useContext, useEffect, useState } from 'react'
import "../css/StudentGroupChat.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import InputEmoji from "react-input-emoji"
import Messsage from "../componets/GroupchatMessage.js"
import { AuthContext } from '../context/AuthContext';
import SendIcon from '@mui/icons-material/Send';
import  {io } from 'socket.io-client';
import moment from 'moment';
const socket =  io("https://futrolearnacademy-server.onrender.com")
function StudentGroupChat(){
    const navigate =useNavigate()
    const[message,Setmessage]=useState([])
    const[Content,SetContent]=useState("")
    const{User,UserProfile}=useContext(AuthContext)
 
    console.log("groupmessage",message)
    console.log("groupmessage",message)
    const sendMessage=async()=>{
        if(Content !== ""){
        await socket.emit("GroupMessage",  {
          user: User?.fullname,
          message:Content,
         room:"studentgroupchat",
          picture:UserProfile?.image ||UserProfile?.data?.image,
          timestamp:moment()
        });
      SetContent("")}

      }
        useEffect(() => {

            const handleMessage = (data) => {
              console.log("data",data)


              console.log("message", message)
              // if(message.length === 0 ){
              //   Setmessage({messages:data.message,user:data.user})
              // }else {
              //   Setmessage((prev) => ({
              //     ...prev,
              //     messages: [...prev.message, { user: data.user, message: data.message }],
              //   }));
              // }
              Setmessage((el)=>[...el,data])

            };
          
            socket.on("receiveMessage", handleMessage);
          
            return () => {
              // Clean up the event listener when the component unmounts
              socket.off('receiveMessage', handleMessage);
            };
          
           
          },[socket])
  return (
  <section className='groupcont'>
    <div className='studentgroupheader'>
       <h1> Student Group chat</h1>
    </div>

    <div className='messcontsd'>
    <div className='closebtnd' onClick={()=>navigate('/home')}>
        <LogoutIcon/>
    </div>
    {
							message?.length > 0  &&
								message.map(({ message, user,picture,timestamp}) => {
									return (
										<>
										 <Messsage  isreadusermessage={user == User.fullname ? true : false} content={message}  user={ user} picture={picture} timestamp={timestamp}/>
        
										</>
									)
								})

}  

    </div>
    <div className='inputcont' >
        <InputEmoji onChange={SetContent}  value={Content}  placeholder='Type to message'  />
       <div className='senmess' onClick={()=>sendMessage()}>
       <SendIcon/>
       </div>
    </div>
  </section>
  )
}

export default StudentGroupChat
