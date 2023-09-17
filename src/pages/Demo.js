import "../css/Demo.css"
import student from "../images/student.png"
import Coursedetail from "../componets/Coursedetail"
import { useState } from "react"
import { CourseData } from "../utils/Coursedata"
import Navbar from "../componets/Navbar"
import { useNavigate } from "react-router-dom"
import learn from "../image7/icons8_training_96px.png"
import certificate from "../image7/icons8_new_resume_template_96px.png"
import training from "../image7/icons8_teacher_96px.png"
import publish from "../image7/icons8_books_96px.png"
import Review from "../componets/Review"
import  Youtubevideos  from "../componets/YoutubeEmbed"

const feature = CourseData.slice(3,11)
function Demo() {
  const[featured]=useState(feature)
  const navigate = useNavigate()
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <section className="democont">
    <Navbar/>
      <div className='banner'>
      <div className="conbanl">
      <h1>A broad selection  <br/>   of courses</h1>
      <p> choose from 300 online video courses with <br/> new addition publish everymonth  </p> 
      <div className="banbtn">
      <button className="btn1" onClick={()=>navigate('/course')}>Explore Courses</button>
      <button className="btn2" onClick={()=>navigate('/signup')}>Start learning</button>  
      </div> 
      </div>
      <div className="conbanr">
        <img src={student} width={510} />
      </div>
      </div>

      <div className="featured">
          <div className="featheader">
            <h1>Featured Courses</h1>
            <p>learning often happens in classroom but it doesn't have to.Use Eduflow to <br/> facilitate learning experience no matter the context</p>
          </div>
      </div>
      <div className="cosdetcont">
        {
          featured.map((el)=>{
            return <Coursedetail props={el} key={el.id}/>
          })
        }   

        <div className="cosbtn">
          <button onClick={()=>{ return (navigate('/course') , scrollToTop())} }>Browse All Courses</button>
        </div>
      </div>

   
        <div className="bannscourse"> 
          <div className="colss">
            <img src={learn} width={30}/>
            <h2>3,000</h2>
            <h5>Learn</h5>
          </div>
          
          <div className="colss">
           <img src={certificate} width={30}/>
              <h2>5,000</h2>
           <h5>Certificate</h5> 
          </div>

          <div className="colss">
            <img src={training} width={30}/>
            <h2>120</h2>
            <h5>Instructor</h5>
          </div>

          <div className="closs">
            <img src={publish} width={30}/>
            <h2>760</h2>
            <h5>Courses Published</h5>
          </div>
        </div>

    <div className="chooseus">
       <div className="choosefirst">
        <h1>Why choose us</h1>
        <p>
        Choose FuturoLearn Academy for a transformative learning experience that prepares you for the future. With a curriculum designed to address emerging trends and technologies, you'll gain the skills and knowledge needed to excel in a rapidly evolving world. Our innovative approach combines cutting-edge technology, expert instructors, and interactive learning tools to provide an engaging and immersive educational journey. 
         <br/>
         <br/>  
       What sets FuturoLearn apart is its diverse course offerings spanning tech innovations, creative arts, sustainability, and more. Our instructors bring real-world expertise to the table, ensuring you learn practical skills that extend beyond theory. The emphasis on skill application and portfolio building equips you with a tangible demonstration of your capabilities.
         <br></br> 
         <br></br> 
Flexibility is key - our online platform allows learning at your pace, making education accessible to busy professionals, students, and anyone seeking growth. By choosing FuturoLearn, you're investing in your future success and personal development, embracing a community of learners who are driven to shape tomorrow. Whether you're entering a new field or enhancing your current expertise, FuturoLearn is your gateway to a brighter, more prepared future.
        </p>
       </div>
       <div className="choosesecond">
       <Youtubevideos embedId={`8B24j0W9vVI`}  className="frustvide"/>

       </div>
    </div>
    <div className="chooseus">
       <div className="choosefirst1">
        <h1>About us</h1>
        <p>
        Welcome to FuturoLearn Academy, where we are redefining education for the future. Our academy is not just a place to learn; it's a transformative journey that equips you with the skills, knowledge, and mindset needed to thrive in a rapidly changing world.
        <br/>
<br/>
At FuturoLearn, we understand that the landscape of education is evolving, and traditional approaches are no longer enough. That's why we've curated a curriculum that focuses on the skills and subjects that will shape the future. From tech innovations to global citizenship, sustainability to personal growth, our diverse range of courses empowers you to explore your passions and prepare for the challenges ahead.
<br/>
<br/>
What truly sets FuturoLearn apart is our commitment to innovation. Our online platform harnesses the power of advanced technology, interactive tools, and expert instructors to create an immersive and engaging learning experience. Whether you're participating in virtual labs, collaborating with peers from around the world, or benefiting from AI-driven assessments, you're at the forefront of educational advancement.
<br/>
<br/>
Our instructors are not just educators; they're mentors who bring real-world expertise into the virtual classroom. With a focus on practical application, you'll gain insights and skills that extend beyond theory. Our emphasis on skill-building projects ensures that you graduate with a portfolio that reflects your capabilities, making you stand out in a competitive world.
<br/>
<br/>
We recognize that life is busy, and learning should be flexible. That's why FuturoLearn offers you the freedom to learn on your terms. Whether you're a working professional, a busy parent, or a student with a packed schedule, our platform adapts to your lifestyle, allowing you to pursue education without sacrificing your commitments.
<br/>
<br/>
When you choose FuturoLearn Academy, you're not just choosing a learning institution; you're choosing to invest in yourself and your future. Join a community of learners who are as ambitious as you are, who are excited to shape tomorrow, and who believe that education is the key to unlocking limitless possibilities. Your journey with us is a testament to your dedication to growth and progress, and we're here to support you every step of the way. Welcome to FuturoLearn Academy, where the future is yours to learn and shape.
        </p>
   </div>
   </div>
   <div className="review">
        <h1>Students Review</h1>
   <Review/>
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
    <p onClick={()=>navigate('/course')}>Courses</p>
    <p>Membership</p>
    <p>Instructor</p>
    <p>Faqs</p>
</div>
<div className="thirds">
    <span>Supports</span>
    <p>Forums</p>
    <p>Terms</p>
    <p>Community</p>
     <p onClick={()=>navigate('/admin/signup')}>Admin</p> 
</div>
<div className="forths">
<p>&copy; Copy right  {new Date().getFullYear()} All right reserved .<br/> powered by CodeprofAcademy designed by Owuye Abdulmalik</p>
</div>
</div>
    </section>
  )
}

export default Demo