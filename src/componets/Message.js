import React from 'react'
import moment from "moment"

function Messsage({isreadusermessage,content,timestamp}) {
  return (
    <div className='messagecont' style={{backgroundColor:isreadusermessage?     '#202C33' :  "#2E1C49",
    alignSelf:isreadusermessage? "flex-start":"flex-end",
    padding:"10px",
    color: "#fff",
    display:"flex",
    justifyContent:"flex-start",
    flexDirection:"column",
    alignItems:"flex-start",
    fontFamily:"sans-serif",
    fontWeight:"normal",
    borderTopLeftRadius: isreadusermessage ?   "0px" : "10px" ,
    borderBottom:"35px",
    borderTopRightRadius:!isreadusermessage? "0px" :"10px"
    }}>
    <p style={{justifyContent:"flex-start" , alignItems:"center", wordWrap:"break-word"}}>{content}</p>
    <small className='message-footer' style={{alignSelf:"flex-end", color:"gray", fontSize:"10px"}}>
        {moment(timestamp).calendar()}</small>
        
    </div>
  )
}

export default Messsage