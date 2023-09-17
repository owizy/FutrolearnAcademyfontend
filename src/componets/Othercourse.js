import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import "./Coursedetail.css"
import { ThemeContext } from '../context/ThemeContext'
function Othercourseinfo({props}) {
    const navigate = useNavigate()
    const {theme} = useContext(ThemeContext)
    function scrollToTop() {
        window.scrollTo(0, 0);
      }
  return (
    <div className="coursedetailcont" style={{boxShadow: theme === "light-theme" ?   "3px 3px 2px 0px rgba(51, 51, 51, 0.5)" : "none"}} id='hovingsss'>
    <img src={props.image} className="coimg" id='otherimagess' />
    <p className="coursep" onClick={()=>{ return navigate(`/product/${props.Topic}`),scrollToTop() }}>{props.Topic}</p>

     <div className='getcertificated' style={{marginTop:"10px"}}>
 <button onClick={()=>{ return navigate(`/product/${props.Topic}`),scrollToTop() }}  style={{background:"black"}}>view details</button>
     </div>
</div>
  )
}

export default Othercourseinfo