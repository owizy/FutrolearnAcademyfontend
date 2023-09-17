import "./Navbar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Navbar() {
  const navigate = useNavigate()
  return (
    <header>
        <nav className='logo'>
        <div className="logo" onClick={()=>navigate('/')}>
    <div className="f-letter">Futurolearn</div>
    <span className="text">Academy</span>
  </div>
        </nav>
        <nav className="achors">
       <Link  to={`/login`}  className="login">Login</Link>
       <Link  to={`/signup`} className="signup">Signup</Link>
        </nav>
    </header>
  )
}

export default Navbar