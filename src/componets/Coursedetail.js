import "./Coursedetail.css"
import book from "../images/book.png"
import user from "../images/user.png"
import star from "../images/star.png"
import { useNavigate } from "react-router-dom"
function Coursedetail({props}){
  const navigate = useNavigate()
  return (
    <div className="coursedetailcont">
        <img src={props.image} className="coimg"/>
        <p className="coursep" onClick={()=>navigate(`/course/info/${props.Topic}`)}>{props.Topic} </p>
        <div className="detailst">
          <div className="numberoflesson">
            <img src={book} width={20}/>
            <p>{`${props.studentlearnt} Lessons`}</p>
          </div>
          <div className="nolearner">
            <img src={user} width={20}/>
            <p>12.5k</p>
          </div>
        </div>

           
        <div className="reviewno">
          <div className="numberofreviews">
            <img src={star} width={20}/>
            <p>{`${props.review}k`}</p>
          </div>
          <div className="learner">
          <button onClick={()=>navigate('/signup')}>Enroll Now</button>
          </div>
        </div>
   



           
    </div>
  )
}

export default Coursedetail