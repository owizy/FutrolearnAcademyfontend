import React from 'react'
import { Avatar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import "../css/Profile.css"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../context/ThemeContext';
import hide from "../image7/eyehide.png"
import shows from "../image7/eyeshow.png"
import { AuthContext } from '../context/AuthContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react';
import { useState } from 'react';
import baseUrl, { PostRequest } from '../utils/Service';
import axios from "axios"
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function AdminSetting() {
  const [image, setImage] = useState(null);
  const [UpadeFullname,SetUpadateFullname]=useState(false)
  const [isLoadingUpadeFullname,SetisLoadingUpadateFullname]=useState(false)
  const [UpadeEmail,SetUpadateEmail]=useState(false)


  const [isLoadingUpadeEmail,SetisLoadingUpadateEmail]=useState(false)
  const [UpadePassword,SetUpadatePassword]=useState(false)
  const [isLoadingUpadePassword,SetisLoadingtUpadatePassword]=useState(false)
  const [isLoadingUpload,SetisLoadingUpload]=useState(false)


  const[UpdateError,SetUpdateError]=useState("")
  

  const[Uemail,SetUemail]=useState("")
       const[Upassword,SetUpassword]=useState("")
       const[UFullname,SetUFullname]=useState("")  
         const{ToggleTheme,theme}=React.useContext(ThemeContext)  
    const [show,setShow]=React.useState(false)
    
  const[shows,Setshow]=useState(false)
    const [CreateUser,setCreateUser]=React.useState(false)
    const [CreateAdmin,setCreateAdmin]=React.useState(false)
    const {User,registerinfo,UpdateRegisterinfo,RegisterError,isRegisterLoading,Adminregisteruser,Logout,SetUser,SetUserProfile,UserProfile} = React.useContext(AuthContext)
    const navigate =useNavigate()
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(true);
    };
  
   useEffect(()=>{
      setOpen(true)
   },[User])
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  async function UPDATEfullname(){
    SetisLoadingUpadateFullname(true)
    const response =await PostRequest(`${baseUrl}/user/${User?._id}/fullname`,UFullname)
    SetisLoadingUpadateFullname(false)
    if(response?.Error){
      return SetUpadateFullname(true), SetUpdateError(response)
  }

  localStorage.setItem("user",JSON.stringify(response))
  SetUser(response)
  SetUpdateError({messages:"Upate sucessfull"})
  SetUpadateFullname(false)
    SetUFullname('')
  }
 async function UPDATEemail(){
    SetisLoadingUpadateEmail(true)
    const response= await PostRequest(`${baseUrl}/user/${User?._id}/email`,Uemail)
    SetisLoadingUpadateEmail(false)
    if(response?.Error){
   return     SetUpadateEmail(true),SetUpdateError(response)

  }

  localStorage.setItem("user",JSON.stringify(response))
    SetUser(response)

  SetUpdateError({messages:"Update sucessfull"})
  SetUpadateEmail(false)
    SetUemail('')
  }
async  function UPDATEpassword(){
    SetisLoadingtUpadatePassword(true)
    const response= await PostRequest(`${baseUrl}/user/${User?._id}/password`,Upassword)
    SetisLoadingtUpadatePassword(false)
    if(response?.Error){
   return   SetUpadatePassword(true),SetUpdateError(response)

  }

  localStorage.setItem("user",JSON.stringify(response))
  SetUser(response)
   SetUpdateError({messages:"Upate sucessfull"})
  SetUpadatePassword(false)
    SetUpassword('')
  }


  const submitImage = async (e) =>{
    localStorage.getItem("picture")
    

    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      `${baseUrl}/user/${User?._id}/profilepicture`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
  

      //  const response =await PostRequest(`${baseUrl}/user/${User?._id}/profilepicture`,postImage)
    
    
        if(response?.Error){
        return  SetUpdateError(response)
     
       }
       SetisLoadingUpload(false)
       localStorage.setItem("picture",JSON.stringify(response))
       SetUserProfile( response)
  }








  const UpadateImage = async (e) =>{
    localStorage.getItem("picture")
    

    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      `${baseUrl}/user/update/${User?._id}/update`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
  

    
        if(response?.Error){
        return  SetUpdateError(response.message)
     
       }
       SetisLoadingUpload(false)
       localStorage.setItem("picture",JSON.stringify(response))
       SetUserProfile( response)
  }
  
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <section className='profiless' style={{backgroundColor:theme ==="light-theme" ? "whitesmoke" :"#1d2634 ", color:theme === "light-theme"? "#000" :"#fff"}}>
    {RegisterError?.message &&  <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}} >
        <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }} >
         {RegisterError?.message}
        </Alert>
      </Snackbar>}
      {UpdateError?.messages &&  <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={"success"} sx={{ width: '100%' }}>
         {UpdateError?.messages}
        </Alert>
      </Snackbar>}
    <div className='profclose' onClick={()=>navigate('/admin')}>
      <CloseIcon style={{fontSize:"40px",cursor:"pointer"}}/>
    </div>
    <div className='ess'>
    <h1>Settings</h1>
    </div>
    <div className='dest1' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#000", color:theme === "light-theme"? "#000" :"#fff"}}>
    <div className='des1i'>
    
    <Avatar alt={User?.fullname}  src={`${baseUrl}/${UserProfile?.image ||UserProfile?.data?.image}`} sx={{cursor:"pointer",}} className='avatar' /> {!UserProfile && <form onSubmit={submitImage} style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",gap:"20px"}}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
       {!isLoadingUpload && <button type="submit">Upload Image</button>}      </form>}

       {UserProfile && <form onSubmit={UpadateImage} style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",gap:"20px"}}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
       {!isLoadingUpload && <button type="submit">Update Image</button>}      </form>}
    </div>
    <div className='deslii'>
    {!UpadeFullname && <label>Name:{User?.fullname} </label>}
      {UpadeFullname &&   <label><input type='text' style={{border:"2px solid #000"}} onChange={(e)=>SetUFullname({...UFullname,fullname:e.target.value})} name='fullname'/>  </label>}
     {!UpadeFullname &&   <button onClick={()=>{return SetUpadateFullname(!UpadeFullname),SetUpadateEmail(false),SetUpadatePassword(false)}}>Update name</button> }
     {UpadeFullname &&    <>
       {
        isLoadingUpadeFullname ?
        <button>

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>
        :<button onClick={()=>UPDATEfullname()}>Change name</button>
       }
     </> }

     {!UpadeEmail && <label>Email:{User?.email}</label>}
     {UpadeEmail && <label><input type='text' style={{border:"2px solid #000"}}/></label>}
      {!UpadeEmail && <button onClick={()=>{return SetUpadateEmail(!UpadeEmail),SetUpadateFullname(false),SetUpadatePassword(false)}}>Update email</button>}
      {UpadeEmail &&  <>
      
      {
        isLoadingUpadeEmail ?
        <button>

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>
        :<button onClick={()=>UPDATEemail()}>Change email</button>
      }
      </>}
     {!UpadePassword && <label>Password:********</label>}
    
     {UpadePassword && <label><input type={!shows ? "password":'text'} style={{border:"2px solid #000"}} name='password1' onChange={(e)=>SetUpassword({...Upassword,password1:e.target.value})}/></label>}
     {UpadePassword && <>
      <label><input type={!shows ? "password":'text'} style={{border:"2px solid #000"}} name='password2'onChange={(e)=>SetUpassword({...Upassword,password2:e.target.value})}/></label>
            
      <div  className="checkboxs" style={{display:"flex"}}>
            <input type="checkbox"  onClick={()=>Setshow(!show)}/>
            <p>show password</p>
            </div>
     </>}
      {!UpadePassword && <button onClick={()=>{return SetUpadatePassword(!UpadePassword),SetUpadateEmail(false),SetUpadateFullname(false)}}>Update password</button>}
      {UpadePassword &&  <>
      {
        isLoadingUpadePassword ?
        <button>

        <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        </div></button>
        : <button onClick={()=>UPDATEpassword()}>Change password</button>
      
      }
      
      </>}
    </div>
    </div>
      <div className='themss' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#000", color:theme === "light-theme"? "#000" :"#fff"}}>
       <p> Theme</p>
    <div>
          {theme ==="light-theme" ? <Switch {...label} onClick={()=>ToggleTheme()}/> : <Switch {...label} defaultChecked  onClick={()=>ToggleTheme()}/>}
          {theme === "light-theme" ? <LightModeIcon sx={{color:"#000",}}/> : <DarkModeIcon sx={{color:"#fff"}}/>}  
    </div>
      </div>


      <div className='themss' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#000", color:theme === "light-theme"? "#000" :"#fff"}}>
       <p> Logout</p>
    <div>
    <button onClick={()=>Logout()}>Logout</button>
    </div>
      </div>
      <div className='addauser' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#000", color:theme === "light-theme"? "#000" :"#fff"}}>
        <div className='divs'>
            <div className='createss'><h2>Create a user</h2>    <button onClick={()=>{ return setCreateUser(!CreateUser),setCreateAdmin(false)}}>Create</button></div>
           {CreateUser &&  <div className='creatusers'>
            <form onSubmit={Adminregisteruser}>
           
            <label>
            <div >
<p>Fullname</p>
</div>
<input  type="text" required onChange={(e)=>UpdateRegisterinfo({ ...registerinfo , fullname:e.target.value, UserType:"student" }) } value={registerinfo.fullname} name="fullname"/>
            </label>
             <label>
               <p>Email</p>
               <input type="email" required value={registerinfo.email} onChange={(e)=>UpdateRegisterinfo({ ...registerinfo, email:e.target.value ,SecretKey:"Futro@2023#Secure!"})} name="email"/>
             </label>
              <label>
              <div className="spaces">
<p>Password</p>
<h6 onClick={()=>{
  setShow((e)=>{
    return !e
  })
}} style={{cursor:"pointer"}}><img src={show ?  shows : hide } style={{width:"20px", backgroundColor:"white"}}/></h6>
</div>
<input  type={show ? "text" : "password" } required value={registerinfo.password} onChange={(e)=>UpdateRegisterinfo({...registerinfo,password:e.target.value})} name="password"/>

              </label>
              { isRegisterLoading    ? <div className="btns"> 
<button>

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>
            </div> : <div className="btns">
            <button type="submit">Create</button>
            </div> }
        </form>
            </div>}
        </div>





        
        <div className='divs'>
            <div className='createss'><h2>Create a Admin</h2>    <button onClick={()=>{ return setCreateAdmin(!CreateAdmin),setCreateUser(false)}}>Create</button></div>
           {CreateAdmin && <div className='creatusers'>
            <form onSubmit={Adminregisteruser}>
           
            <label>
            <div >
<p>Fullname</p>
</div>
<input  type="text" required onChange={(e)=>UpdateRegisterinfo({ ...registerinfo , fullname:e.target.value, UserType:"Admin" }) } value={registerinfo.fullname} name="fullname"/>
            </label>
             <label>
               <p>Email</p>
               <input type="email" required value={registerinfo.email} onChange={(e)=>UpdateRegisterinfo({ ...registerinfo, email:e.target.value ,SecretKey:"Futro@2023#Secure!"})} name="email"/>
             </label>
              <label>
              <div className="spaces">
<p>Password</p>
<h6 onClick={()=>{
  setShow((e)=>{
    return !e
  })
}} style={{cursor:"pointer"}}><img src={show ?  shows : hide } style={{width:"20px", backgroundColor:"white" }} /></h6>
</div>
<input  type={show ? "text" : "password" } required value={registerinfo.password} onChange={(e)=>UpdateRegisterinfo({...registerinfo,password:e.target.value})} name="password"/>
                 
              </label>
              <label>
               <p>Secret key</p>
               <input type="text" required value={registerinfo.SecretKey} onChange={(e)=>UpdateRegisterinfo({ ...registerinfo, SecretKey:e.target.value})} name="SecretKey"/>
             </label>
              <label></label>
              { isRegisterLoading    ? <div className="btns"> 
<button>

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>
            </div> : <div className="btns">
            <button type="submit">Create</button>
            </div> }
        </form>
            </div>}
        </div>
        
      </div>
  </section>
  )
}

export default AdminSetting