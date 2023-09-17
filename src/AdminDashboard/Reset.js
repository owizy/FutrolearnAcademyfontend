import React from "react"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import "./Reset.css"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import baseUrl from "../utils/Service";
function ResetPassword() {
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const[forgeterror,Setforgeterror]=useState("")
    const[isLoading,SetisLoading]=useState(false)
    const[show,Setshow]=useState(false)
    const navigate = useNavigate()
    const {id, token} = useParams()
    const handleSubmit = (e) => {
        e.preventDefault()
        SetisLoading(true)
        axios.post(`${baseUrl}/reset-password/${id}/${token}`, {password,password1})
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/sucess/resetpassword')
            }
        }).catch(err => Setforgeterror(err),SetisLoading(false))
        SetisLoading(false )
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(true);
    };
   useEffect(()=>{
      setOpen(true)
   },[forgeterror])
   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
    return(
        <div className="restcont">
      {forgeterror?.response?.data &&  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
         {forgeterror?.response?.data}
        
        </Alert>
      </Snackbar>}
    
         <h4>Reset Password</h4>
      <div className="resetchild">
        
        <form onSubmit={handleSubmit}>
          <div className="mb">
            <label htmlFor="email">
              <strong>New Password</strong>
            </label>
            <input
              type={show ?"text" :"password"}
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type={show ?"text" :"password"}
              placeholder="Reset Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword1(e.target.value)}
              required 
             />
            <div  className="checkboxs" >
            <input type="checkbox"  onClick={()=>Setshow(!show)}/>
            <p>show password</p>
            </div>
          </div>
          {isLoading ? 
<button >

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>:<button type="submit"   >
            Update
          </button>}
          </form>
        
      </div>
    </div>
    )
}

export default ResetPassword