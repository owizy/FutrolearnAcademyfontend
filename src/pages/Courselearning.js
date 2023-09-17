import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../utils/Coursedata'
import "../css/courseinfo.css"
import HomeHeader from '../componets/HomeHeader'
import { ThemeContext } from '../context/ThemeContext'
import Coursevideos from '../componets/Coursevideo'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import baseUrl from '../utils/Service'
function Courselearning() {
const{theme}=useContext(ThemeContext)    
const {Topic} =useParams()
const[items,setitems]=useState([])
const [activeIndex, setActiveIndex] = useState(null);

useEffect(() => {
  const storedIndex = localStorage.getItem('activeIndex');
  if (storedIndex !== null) {
    setActiveIndex(parseInt(storedIndex));
  }
}, []);

const handleClick = (index) => {
  if (activeIndex === index) {
    setActiveIndex(null);
    localStorage.removeItem('activeIndex'); // Remove the item from localStorage when hiding
  } else {
    setActiveIndex(index);
    localStorage.setItem('activeIndex', index); // Store the index in localStorage
  }
};

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


// local port 
const ClientUrl=`http://localhost:3000/${items.length !==0 ? items.newitem.downloadcourse :''}`
const Download=(url)=>{
        fetch(url).then(response=>response.blob()).then(blob =>{
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName=url.split('/').pop()
            const aTag =document.createElement('a')
            aTag.href=blobURL
            aTag.setAttribute('download',fileName)
            document.body.appendChild(aTag)
            aTag.click()
            aTag.remove()
        })
        
    }
  return (
    <section className='infocont' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff"}}>
   <HomeHeader/>
    <div className='bans1' >
       <h1>{items.length !==0 && items.newitem.Topic}</h1>   
       <p>{items.length !==0 &&  items.newitem.details}</p>
       <button onClick={()=>Download(ClientUrl)}>Download Syllabus</button>        
    </div>
       <div className='courseinfocont'  style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff",}}>
        <span>Lessons</span>
        <div className='learncontss2'>
        
        {
          
           
            items.length  !==0   &&   items.newitem.lessonsheader.map((key, index) => (
                <div key={index}  className='infons1'>
               <div className='lexc'>
               <h1>{key}</h1>
               {activeIndex === index ?<KeyboardArrowUpIcon sx={{fontSize:"30px",cursor:"pointer"}} onClick={()=>handleClick(index)}/>:<KeyboardArrowDownIcon sx={{fontSize:"30px",cursor:"pointer"}} onClick={()=>handleClick(index)}/>}
               </div>
                { activeIndex === index && <Coursevideos embedId={items.newitem.lessonTopic[index]}/>}
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

export default Courselearning