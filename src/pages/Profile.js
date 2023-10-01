import { Avatar } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import "../css/Profile.css"
import { ActiviesContext } from '../context/ActivitesContext'
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import baseUrl, { PostRequest } from '../utils/Service';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Profile() {
  const [image, setImage] = useState(null);
  const {activities ,removeActivities}=useContext(ActiviesContext)
  const {User,SetUser,SetUserProfile,UserProfile}=useContext(AuthContext)
 const{theme}=useContext(ThemeContext)
  
 const [UpadeFullname,SetUpadateFullname]=useState(false)
  const [isLoadingUpadeFullname,SetisLoadingUpadateFullname]=useState(false)
  const [UpadeEmail,SetUpadateEmail]=useState(false)

  const[show,Setshow]=useState(false)
  const [isLoadingUpadeEmail,SetisLoadingUpadateEmail]=useState(false)
  const [UpadePassword,SetUpadatePassword]=useState(false)
  const [isLoadingUpadePassword,SetisLoadingtUpadatePassword]=useState(false)
   const [isLoadingUpload,SetisLoadingUpload]=useState(false)

  const[UpdateError,SetUpdateError]=useState("")
  

  const[Uemail,SetUemail]=useState("")
       const[Upassword,SetUpassword]=useState("")
       const[UFullname,SetUFullname]=useState("")
       const[isLoadingImage,SetisLoadingImage]= useState(false)
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
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
   try{
    const response =await PostRequest(`${baseUrl}/user/${User?._id}/fullname`,UFullname)
    SetisLoadingUpadateFullname(false)
    if(response?.Error){
      return SetUpadateFullname(true), SetUpdateError(response)
  }

  localStorage.setItem("user",JSON.stringify(response))
  SetUser(response)
  SetUpdateError({messages:"Upate sucessfull"})
  SetUpadateFullname(false)
   }catch(err){
    SetUpdateError(err)
   }
    SetUFullname('')
  }
 async function UPDATEemail(){
    SetisLoadingUpadateEmail(true)


 try{   const response= await PostRequest(`${baseUrl}/user/${User?._id}/email`,Uemail)
    SetisLoadingUpadateEmail(false)
    if(response?.Error){
   return     SetUpadateEmail(true),SetUpdateError(response)

  }

  localStorage.setItem("user",JSON.stringify(response))
    SetUser(response)

  SetUpdateError({messages:"Update sucessfull"})
  SetUpadateEmail(false)}catch(err){
    SetUpdateError(err)
  }
    SetUemail('')
  }
async  function UPDATEpassword(){
try{
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
}catch(err){
 SetUpdateError(err)
}
    SetUpassword('')
  }

  const submitImage = async (e) =>{
    localStorage.getItem("picture")
    

    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
   try{
     SetisLoadingImage(true)   
    const response = await axios.post(
      `${baseUrl}/user/${User?._id}/profilepicture`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
  
      //  const response =await PostRequest(`${baseUrl}/user/${User?._id}/profilepicture`,formData)
       console.log("response",response)
    
    
        if(response?.Error){
        return  SetUpdateError(response)
     
       }
       SetisLoadingUpload(false)
       localStorage.setItem("picture",JSON.stringify(response))
       SetUserProfile( response)
       SetisLoadingImage(false)
      }catch(err){
        SetUpdateError(err)
        SetisLoadingImage(false)   

      }
  }








  const UpadateImage = async (e) =>{
    localStorage.getItem("picture")
   try{
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("image", image);
    SetisLoadingImage(true)   
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
       SetisLoadingImage(false)   
   }catch(err){
     SetUpdateError(err)   
     SetisLoadingImage(false)   
 
   } 

   
      }
  
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const navigate =useNavigate()
  return (
  <section className='profiless' style={{backgroundColor:theme ==="light-theme" ? "whitesmoke" :"#1d2634 ", color:theme === "light-theme"? "#000" :"#fff"}}>
      {UpdateError?.message &&  <Snackbar open={open} autoHideDuration={500} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}} >
        <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
         {UpdateError?.message}
        </Alert>
      </Snackbar>}

      {UpdateError?.messages &&  <Snackbar open={open} autoHideDuration={500} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={"success"} sx={{ width: '100%' }}>
         {UpdateError?.messages}
        </Alert>
      </Snackbar>}
    <div className='profclose' onClick={()=>navigate('/home')}>
      <CloseIcon style={{fontSize:"40px",cursor:"pointer"}}/>
    </div>
    <div className='ess'>
    <h1>Profile</h1>
    </div>
    <div className='dest1' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#000", color:theme === "light-theme"? "#000" :"#fff"}}>
    <div className='des1i' >
   
    <Avatar alt={User?.fullname}  src={`${UserProfile?.image ||UserProfile?.data?.image}`} sx={{cursor:"pointer",}} className='avatar' /> 

   {UserProfile.Error    && <form onSubmit={submitImage} style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",gap:"20px"}}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
       {!isLoadingUpload && isLoadingImage ? <button>Uploading....</button> : <button type="submit">Upload Image</button>   }      </form>}

       {!UserProfile.Error && <form onSubmit={UpadateImage} style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",gap:"20px"}}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
       {!isLoadingUpload && isLoadingImage ? <button>Uploading.....</button> : <button type="submit">Update Image</button>}      </form>}
 <>
   
       {
        isLoadingUpload &&
        <button>

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>
       
       }
     </> 
    </div>
   
   
    <div className='deslii'>
      {!UpadeFullname && <label>Name:{User?.fullname} </label>}
      {UpadeFullname &&   <label> <div onClick={()=>SetUpadateFullname(!UpadeFullname)} style={{cursor:"pointer"}}><CloseIcon/> </div><input type='text' style={{border:"2px solid #000"}} onChange={(e)=>SetUFullname({...UFullname,fullname:e.target.value})} name='fullname'/>   </label> }
     
     {!UpadeFullname &&   <button onClick={()=>{ return SetUpadateFullname(!UpadeFullname),SetUpadateEmail(false),SetUpadatePassword(false)}}>Update name</button> }
     {UpadeFullname &&   <>
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
     {UpadeEmail && <label><div onClick={()=>SetUpadateEmail(!UpadeEmail)} style={{cursor:"pointer"}}><CloseIcon/> </div> <input type='text' style={{border:"2px solid #000"}} name='email' onChange={(e)=>SetUemail({...Uemail,email:e.target.value})}/></label>}
      
      {!UpadeEmail && <button onClick={()=>{return SetUpadateEmail(!UpadeEmail),SetUpadateFullname(false),SetUpadatePassword(false)}}>Update email</button>}
      {UpadeEmail && <>
      
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
     
     {UpadePassword && <label><div onClick={()=>SetUpadatePassword(!UpadePassword)} style={{cursor:"pointer"}}><CloseIcon/> </div> <input type={!show ? "password":'text'} style={{border:"2px solid #000"}} name='password1' onChange={(e)=>SetUpassword({...Upassword,password1:e.target.value})}/></label>}
     {UpadePassword &&<>
      <label><input type={!show ? "password":'text'} style={{border:"2px solid #000"}} name='password2'onChange={(e)=>SetUpassword({...Upassword,password2:e.target.value})}/></label>
            
      <div  className="checkboxs" style={{display:"flex"}} >
            <input type="checkbox"  onClick={()=>Setshow(!show)}/>
            <p>show password</p>
            </div>
     </>}
      {!UpadePassword &&   <button onClick={()=>{return SetUpadatePassword(!UpadePassword),SetUpadateEmail(false),SetUpadateFullname(false)}}>Update password</button>}
      {UpadePassword && <>
      {
        isLoadingUpadePassword ?
        <button>

        <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        </div></button>
        :<button onClick={()=>UPDATEpassword()}>Change password</button>
      }
      
      </>}
    </div>
    </div>
    <div className='dest2' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#000", color:theme === "light-theme"? "#000" :"#fff"}}>
      <h1>Activities</h1>
      {
        activities.map((el)=>{
          return <div className='activitiescont'>
             <img src={el.image} width={'100'}/>
             <div className='actdet'>
             <p>{el.Topic}</p>
             <h3>₦{el.price}</h3>
             </div>
             <span className='frees'>free</span>
             <div onClick={()=>removeActivities(el)} className='cancles'>
             <CancelIcon sx={{cursor:"pointer"}} className='cloxe'/>
             </div>
          </div>
        })
      }
      {
        activities.length === 0 && 
       
        <div className='noactivies'><h3>No activities yet</h3>
         <button className='noactivitiesbtn' onClick={()=>{ return navigate('/home/courses'), scrollToTop() }}>view courses</button>
</div>
                    }
    </div>
  </section>
  )
}

export default Profile
