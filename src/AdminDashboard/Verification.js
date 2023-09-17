import React from 'react'
import emailsent from "./email.gif"
import "./Reset.css"
import { useNavigate } from 'react-router-dom'
function Verification() {
  const navigate = useNavigate()
  return (
   <section className='verificationcont'>
     <div className='verificatechild'>
        <h2>We've sent reset password link to your email</h2> 
     
     <img src={emailsent} width={180}/>
     <p>please check the email inbox you reset<br/>password. you may need to check the spam folder</p>
     <button onClick={()=>navigate('/forgetPassword')}>Resend Email</button>
     </div>
   </section>
  )
}

export default Verification