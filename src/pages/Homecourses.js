import React, { useContext, useState } from 'react'
import HomeHeader from '../componets/HomeHeader'
import { CourseData } from '../utils/Coursedata'
import HCoursedetail from '../componets/HCoursedetail'
import { ThemeContext } from '../context/ThemeContext'
function Homecourses() {
   const[course] =useState(CourseData)
   const{theme}=useContext(ThemeContext)
    return (
    <section  style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff"}}>
        <HomeHeader/>
        <div className="hcourses">
        <h1>Courses</h1>
         <div className="cosdetcont">
         {
          course.map((el)=>{
            return <HCoursedetail props={el} />
          })
         }
         </div>
       </div>


       <div className="footer">

<div className="firsts">
<div className="logo">
<div className="f-letter">Futurolearn</div>
<span className="text">Academy</span>
</div>
<p>Learning often happens in <br/> classrooms but it<br/>doesn't have to.</p>
<p>+2349021669864</p>
<p>aowuye5@gmail.com</p>
</div>
<div className="seconds">
    <span>Resources</span>
    <p>Courses</p>
    <p>Membership</p>
    <p>Instructor</p>
    <p>Faqs</p>
</div>
<div className="thirds">
    <span>Supports</span>
    <p>Forums</p>
    <p>Documentation</p>
    <p>Terms</p>
    <p>Community</p>
</div>
<div className="forths">
<p>&copy; Copy right  {new Date().getFullYear()} All right reserved .<br/> powered by CodeprofAcademy designed by Owuye Abdulmalik</p>
</div>
</div>
     
        </section>
  )
}

export default Homecourses