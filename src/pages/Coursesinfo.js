import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../utils/Coursedata'
import "../css/courseinfo.css"
import Navbar from '../componets/Navbar'
function Coursesinfo() {
const {Topic} =useParams()
const[items,setitems]=useState([])
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
    <section className='infocont'>
        <Navbar/>
        <div className='bans' >
           <h1>{items.length !==0 && items.newitem.Topic}</h1>   
           <p>{items.length !==0 &&  items.newitem.details}</p>
           <button onClick={()=>navigate('/signup')}>Enroll</button>        
        </div>
           <div className='courseinfocont'>
            <span>What you would learn</span>
            <div className='learncontss'>
            
            {
              
               
                items.length  !==0   &&   items.newitem.lessonsheader.map((key, index) => (
                    <div key={index}  className='infons'>
                    <img src={items.newitem.lessonlogo[index]} width={35}/>
                      <h1>{key}</h1>
                      <p>{items.newitem.lessondescript[index]}</p>
                       <h3 onClick={()=>navigate('/signup')}>Learn more</h3>          
                    </div>
                  ))
               
                                  
                           
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

export default Coursesinfo