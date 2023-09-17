import React, { useEffect } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import baseUrl from '../utils/Service';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
function Forget() {
    const [email, setEmail] = useState("")
    const[forgeterror,Setforgeterror]=useState("")
    const[isLoading,SetisLoading]=useState(false)
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [open, setOpen] = React.useState(false);
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
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      SetisLoading(true) 
      e.preventDefault()
        axios.post(`${baseUrl}/forgot-password`, {email})
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/user/link/verify')
               
            }
            
        }).catch(err => Setforgeterror(err),SetisLoading(false))
        SetisLoading(false)
    }
  return (
    <div className="forgetcont">
             {forgeterror?.response?.data &&  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
         {forgeterror?.response?.data}
        
        </Alert>
      </Snackbar>}
      <div className="forgetchild">
        <h4>Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mbm">
            <label htmlFor="email">
            Email
            </label>
            <input
              type="email"
              placeholder="please enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {isLoading ? 
<button >

<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div></button>:<button type="submit"   >
            Submit
          </button>}
          </form>
        
      </div>
    </div>

  )
}

export default Forget