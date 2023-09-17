import { useState } from "react"
import { CourseData } from "../utils/Coursedata"
import Coursedetail from "../componets/Coursedetail"
import "../css/AllCourse.css"
import Navbar from "../componets/Navbar"
function AllCourse() {
     const[course]=useState(CourseData)
    return (
    <div className="allcoursecont">
        <Navbar/>
        <h1>All Courses</h1>
       <div className="cont">
       {
            course.map((el)=>{
                return <Coursedetail props={el}/>
            })
        }

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
           </div>
  )
}

export default AllCourse
