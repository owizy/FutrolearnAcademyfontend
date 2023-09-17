import "./Navbar.css"
import { useNavigate } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
function CertHeader() {
    const navigate = useNavigate()
    const{cartItems}=useContext(CartContext)
    const{theme}=useContext(ThemeContext)
  return (
    <header style={{width:"100%",height:"100px !important",margin:"0px" , flex:"1",backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff",paddingBottom:"20px"}}>
    <nav className='logo'>
    <div className="logo" onClick={()=>navigate('/home')}>
<div className="f-letter">Futurolearn</div>
<span className="text">Academy</span>
</div>
    </nav>
    <nav  style={{paddingRight:"20px", cursor:"pointer"}} onClick={()=>navigate('/product/cart')} className="navc2">
     <ShoppingCartOutlinedIcon/>
    {cartItems.length !==0  && <div style={{backgroundColor:theme !=="light-theme" ? "#fff" :"#11161A", color:theme !== "light-theme"? "#000" :"#fff"}}>{cartItems.length}</div>}
    </nav>
</header>
  )
}

export default CertHeader