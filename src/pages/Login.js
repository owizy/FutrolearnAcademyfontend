import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../css/Register.css"
import close from "../image7/icons8_close_96px.png"
import hide from "../image7/eyehide.png"
import shows from "../image7/eyeshow.png"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Login() {
  const navigate = useNavigate()
  const [show,setShow]=useState(false)
  const {Logininfo,UpdateLogin,LoginUser,LoginError,isLoginLoading}=useContext(AuthContext)
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  useEffect(()=>{
    setOpen(true)
 },[LoginError])
 const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};
    return (
    <section className="registercont">
       {LoginError?.message &&  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
         {LoginError?.message}
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
        <form onSubmit={LoginUser}>
            <h1>Login</h1>
            <label>
            <div className="spaces">
<p>Email</p>
<h6>Need an account ?<Link to={`/signup`}>Signup</Link></h6>
</div>
              <input  type="email" required onChange={(e)=>UpdateLogin({...Logininfo,email:e.target.value})} value={Logininfo.email}/>
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
              <input  type={show ? "text" : "password" } required value={Logininfo.password} onChange={(e)=>UpdateLogin({...Logininfo,password:e.target.value})}/>

              </label>

              <label>
                <Link to={`/forgetPassword`} style={{fontFamily:"serif",fontSize:"19px",fontWeight:"100"}}>forgot password</Link>
              </label>
              {isLoginLoading   ? <div className="btns"> 
<button>

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>
            </div> : <div className="btns">
            <button type="submit">Login</button>
            </div> }
        </form>
        </div>
    </section>
  )
}

export default Login