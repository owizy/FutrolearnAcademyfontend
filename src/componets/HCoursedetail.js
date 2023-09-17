import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import "./Coursedetail.css"
import { ThemeContext } from '../context/ThemeContext'
import { ActiviesContext } from '../context/ActivitesContext'
function HCoursedetail({props}) {
    const navigate = useNavigate()
    const {theme} = useContext(ThemeContext)
    const {addToActivities}=useContext(ActiviesContext)
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
      return (
    <div className="coursedetailcont" style={{boxShadow: theme === "light-theme" ?   "3px 3px 2px 0px rgba(51, 51, 51, 0.5)" : "none"}}>
    <img src={props.image} className="coimg"/>
    <p className="coursep" onClick={()=>{ return navigate(`/learn/${props.Topic}`), scrollToTop()}}>{props.Topic}</p>
    

      <div className='startlearning'>
          <button onClick={()=>{ return navigate(`/learn/${props.Topic}`), scrollToTop(),addToActivities(props)}}>Start learning</button>
         </div>   
     <div className='getcertificated'>
 <button onClick={()=>{return  navigate(`/product/${props.Topic}`), scrollToTop()}}>Get certificated</button>
     </div>
</div>
  )
}

export default HCoursedetail