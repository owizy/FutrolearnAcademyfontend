import CertHeader from "../componets/CertHeader"
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../utils/Coursedata'
import "../css/courseinfo.css"
import { CartContext } from "../context/CartContext"
import { ThemeContext } from "../context/ThemeContext"
import Othercourseinfo from "../componets/Othercourse"

function Getceritiied() {
const {Topic} =useParams()
const{theme} =useContext(ThemeContext)
const[items,setitems]=useState([])
const{addToCart}=useContext(CartContext)
const first=Number(items.length !==0 &&   items.newitem.id) 
const one =Number(`${ first > 10 ? Number(first-6) : Number(first+6) }`)  
const seconds =Number(`${first > 10 ? Number(first-1 ): Number(first+11 )}`)
const Othercourse = CourseData.slice(one,seconds )
const[Othercourses]=useState(Othercourse)
useEffect(()=>{
    const newitem = CourseData.find((el)=>{
        return el.Topic === Topic  
    })   
    if (newitem) {
        setitems({ newitem });
    } else {
        setitems('')
    }
},[items])
const navigate = useNavigate()
  return (
    <section style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff", width:"100%", height:"100vh",display:"flex",flexDirection:"column",paddingTop:"20px"}} className="getcertcont">
      <CertHeader />
      <div className="directcont" >
      <h1 className="direct" style={{cursor:"pointer"}} onClick={()=>navigate('/home')}>{`Home >`}  </h1><span>{`   ${items.length !== 0 && items.newitem.Topic} Certification Exam`}</span>
      </div>
      <div className="desmcont" style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff",}}>
        <img src={items.length !== 0  && items.newitem.image}/> 
       <div className="demcontdetails">
       <h1>{`${items.length !== 0 && items.newitem.Topic} Certification Exam`}</h1>
       <p>{`₦${items.length !==0 && items.newitem.price}`}</p>
         <h4>Prove your skills and increase your earning potential by becoming a Futurolearn Academy Certified </h4> 
        <div className="addto">
        <button onClick={()=>{addToCart( items.length !== 0  && items.newitem)}}>Add to cart</button>
        </div>
       </div>
      </div>
      <div className="reasoncertificate" style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff",}}>
        <div className="reason1">
          <h1>Why get a FuturolearnAcademy Certificate?</h1>
          <p>Fruto Academy's online teaching service provides flexible, expert-led learning for global participants. With diverse courses, interactive engagement, and accessible resources, it equips you with skills and recognized certificates. Join our community to enhance your knowledge, career prospects, and connections, all while learning at your own pace from anywhere.</p>
           <h2>Benefits of {items.length !== 0  && items.newitem.course} Certificate:</h2>
           <li>Get better chances at landing jobs in {items.length !== 0  && items.newitem.Topic}</li>
           <li>Stand out from other candidates</li>
           <li>The Certificate proves you have mastered the fundamental skills of  {items.length !== 0  && items.newitem.Topic }, which builds trust with potential employers. </li>
           <li>Showcase your skills on your resume, LinkedIn and other social media.</li>
           <li>Become more attractive in the job market</li>
        </div>
         <div className="reasonimg">
          <img  src={items.length !==0 && items.newitem.certificate} alt="certificate" width={500}/>
         </div>
      </div>
      <div style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff",}} className="examss">
        <div className="examss1">
          <h1>Exam information</h1>
          <li>Certification Expiration: None</li>
          <li>Requirement to pass: 75% Correct answer</li>
           <li>Format: Online, multiple choice</li>
           <li>Exam deadline: None</li>
           <li>Number of attempts to pass: Two</li>
           <li>Time limit: 120 minutes</li>
        </div>
  
          </div>
          <div style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff",}} className="productsss">
            <h1>Other popular products</h1>
            <div className="productsssconts">
            {
              Othercourses.map((el)=>{
                return <Othercourseinfo props={el}/>
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

export default Getceritiied