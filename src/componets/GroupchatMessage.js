import React from 'react'
import moment from "moment"
import { AuthContext } from '../context/AuthContext'
import { Avatar } from '@mui/material'
import baseUrl from '../utils/Service'
function Messsage({isreadusermessage,content,timestamp,user,picture}) {
  const {User}=React.useContext(AuthContext)
  return (
    <div  style={{
      width:"100%",
    color: "#fff",
    display:"flex",
    flexDirection: isreadusermessage=== true ? "row" : "row-reverse",
    alignSelf:isreadusermessage=== true ? "flex-start":"flex-end",
    fontFamily:"sans-serif",
    fontWeight:"normal",
  
    }}>
      <div>
        <Avatar alt={user} src={`${baseUrl}/${picture}`} />
      </div>

     <div  className='messagecont'style={{  
      backgroundColor:isreadusermessage === true ?     '#202C33' :  "#2E1C49",
      
      display:"flex",
    justifyContent:"flex-start",
    flexDirection:"column",
    alignItems:"flex-start",
    fontFamily:"sans-serif",
    fontWeight:"normal",
    borderTopLeftRadius: isreadusermessage=== true ?   "0px" : "10px" ,
    borderBottom:"35px",
    borderTopRightRadius:isreadusermessage !== true? "0px" :"10px",     flexDirection:"column",   justifyContent:"flex-start",    alignItems:"flex-start",    borderTopLeftRadius: isreadusermessage=== true ?   "0px" : "10px" ,
    borderBottom:"35px",
    borderTopRightRadius:isreadusermessage !== true? "0px" :"10px",
   padding:User.fullname === user && "15px"
  }}
    
    > 

     {User.fullname !== user && <li className='message-footer' style={{alignSelf:"flex-end", color:"white", fontSize:"15px",paddingBottom:"10px",}}>
        {user}</li>}
    <p style={{justifyContent:"flex-start" , alignItems:"center", wordWrap:"break-word"}}>{content}</p>
    <small className='message-footer' style={{alignSelf:"flex-end", color:"gray", fontSize:"10px"}}>
        {moment(timestamp).calendar()}</small>

       </div>        
    </div>
  )
}

export default Messsage