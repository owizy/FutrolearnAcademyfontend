import React from 'react'
import Verify from "./right-mark-with-protect-shield-3d-rendering-vector-icon-illustration_743950-1413.jpg"
import "./Reset.css"
import { useNavigate } from 'react-router-dom'
function Passwesetconfiremed() {
    const navigate = useNavigate()
  return (
    <section className='passconfcont'>
        <div className='passchild'>

            <img src={Verify} width={200}/>
            <h2>Your Password has been reset </h2>
            <h3>Sucessful</h3>
            <button onClick={()=>navigate('/login')}>Login</button>
        </div>
    </section>
  )
}

export default Passwesetconfiremed