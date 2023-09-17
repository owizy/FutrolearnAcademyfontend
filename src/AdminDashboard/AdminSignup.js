import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "../css/Register.css"
import close from "../image7/icons8_close_96px.png"
import hide from "../image7/eyehide.png"
import shows from "../image7/eyeshow.png"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function AdminSignup() {
  const navigate = useNavigate()
  const [show,setShow]=useState(false)
  const{registerinfo,UpdateRegisterinfo,Reisteruser,RegisterError,isRegisterLoading}=useContext(AuthContext)
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(true);
    };
  
    useEffect(()=>{
      setOpen(true)
   },[RegisterError])
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
    return (
    <section className="registercont">
           {RegisterError?.message &&  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
         {RegisterError?.message}
        </Alert>
      </Snackbar>}
        <div className='navs'>
        <div className="logo" onClick={()=>navigate('/')}>
    <div className="f-letter">Futurolearn</div>
    <span className="text">Academy</span>
  </div>
         <div className="closecont">
            <img src={close} width={35} onClick={()=>navigate('/')} style={{cursor:"pointer"}}/>
         </div>
        </div>
        <div className="formcont">
        <form onSubmit={Reisteruser}>
            <h1>Register </h1>
            <label>
            <div className="spaces">
<p>Fullname</p>
<h6>Already  have an account ? <Link to={`/login`}>Login</Link></h6>
</div>
              <input  type="text" required onChange={(e)=>UpdateRegisterinfo({ ...registerinfo , fullname:e.target.value, UserType:"Admin" }) } value={registerinfo.fullname} name="fullname"/>
            </label>
             <label>
               <p>Email</p>
             <input type="email" required value={registerinfo.email} onChange={(e)=>UpdateRegisterinfo({ ...registerinfo, email:e.target.value})} name="email"/>
             </label>
              <label>
              <div className="spaces">
<p>Password</p>
<h6 onClick={()=>{
  setShow((e)=>{
    return !e
  })
}} style={{cursor:"pointer"}}><img src={show ?  shows : hide } style={{width:"20px"}}/></h6>
</div>
              <input  type={show ? "text" : "password" } required value={registerinfo.password} onChange={(e)=>UpdateRegisterinfo({...registerinfo,password:e.target.value})} name="password"/>
                 
              </label>
              <label>
               <p>Secret key</p>
             <input type="text" required value={registerinfo.SecretKey} onChange={(e)=>UpdateRegisterinfo({ ...registerinfo, SecretKey:e.target.value})} name="SecretKey"/>
             </label>
            
            { isRegisterLoading    ? <div className="btns"> 
<button>

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>
            </div> : <div className="btns">
            <button type="submit">Register</button>
            </div> }

        </form>
        </div>
    </section>
  )
}

export default AdminSignup