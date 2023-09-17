import { useNavigate } from "react-router-dom"
import "../css/Pagge404.css"
function Pagenotfound(){
    const navigate = useNavigate()
  return (
    <div className="pageconts">
        <div className="pagescent">
            <h1>404</h1>
            <p>OPPS! PAGE NOT FOUND</p>
            <span>Sorry,the page you're looking for doesn't exist</span>
            <div>
                <button onClick={()=>navigate('/')}>RETURN HOME</button>
            </div>
        </div>
    </div>
  )
}

export default Pagenotfound