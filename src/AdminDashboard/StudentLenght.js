import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import "./Studentlen.css"
import { Avatar, } from '@mui/material'
import { AuthContext } from '../context/AuthContext'
import baseUrl from '../utils/Service'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'
function StudentLenght() {
  const{theme}=useContext(ThemeContext)
  const {User}=useContext(AuthContext)
  const navigate = useNavigate()
  const [Getalluser,SetGetalluser]=useState("")
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        if(Getalluser.length !== 0 ){
          console.log("user")
         }else{
          const res = await fetch(`${baseUrl}/users/${User?._id}/getalluser`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          if(!res.ok){
            return console.log('err',res)
          }
          const resData = await res.json()
            SetGetalluser(resData)
         }        
      }catch(err){
        console.log("error occured due to",err)
      }                 
   } 
  fetchUsers()
 }, [Getalluser ])
   const DeleteUser=async(props)=>{
   alert(props._id && "deleting user these will take 5 mintutes,pls navigate to homepage")
   const response=  await fetch(`${baseUrl}/admin/user/${props._id}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
          });
        if(!response.ok) return console.log("failed")
      
   }
    return (
    <section style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#1d2634 ", color:theme === "light-theme"? "#000" :"#fff",width:"100%",height:"100vh", display:"flex",flexDirection:"column"}} className='studentconts' >
   <div className='studentheader'>
    <span>Name</span>
    <span className='email'>Mail</span>
    <span>Status</span>
    <span>Action</span>
    </div>    
   <div style={{
    width:"100%",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    Padding:"10px",
    marginBottom:"10px",
    paddingLeft:"30px",
    cursor:"pointer"
   }}
   onClick={()=>navigate('/admin')}
   >
   <CloseIcon sx={{fontSize:"40px"}}/>
   </div>
     {
    Getalluser.length !==0  && Getalluser.map((e)=>
      {return (  <div className='usercont' style={{margin:"10px 0px"}}>
      <div>
      <Avatar alt={User?.fullname}  src={`${baseUrl}/.../es`} sx={{cursor:"pointer",justifyContent:"center !important",alignContent:"center !important"}} className='avatar' /> 
      <p>{e?.fullname}</p>
      </div>
      <div>
        <p className='mails'>{e?.email}</p>
      </div>
      <div className='piad'>
      <p >paid</p>  
      </div >
        
     <div style={{cursor:"pointer",}} onClick={()=>DeleteUser(e)}>
     <DeleteIcon/>
     </div>
    </div>)})}
   
  {
    Getalluser.length === 0 && 
    <div style={{
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }} className='bacl'>
      
<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div>
    </div>
  }
    </section>
  )
}

export default StudentLenght