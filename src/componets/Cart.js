import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./Coursedetail.css"
import { useNavigate } from "react-router-dom"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function Cart() {
   const {cartItems, addToCart, removeFromCart, getCartTotal}=useContext(CartContext)
   const navigate = useNavigate()
  
    return (
    <section className="cartcont">
        <nav className='logo'>
    <div className="logo" onClick={()=>navigate('/home')}>
<div className="f-letter">Futurolearn</div>
<span className="text">Academy</span>
</div>
<div onClick={()=>navigate(-1)} style={{marginTop:"25px", paddingRight:"20px"}}>
<CloseOutlinedIcon sx={{fontSize:"40px"}}/>
</div>
    </nav>
        <h1>Cart</h1>
        
       {cartItems.length > 0 ? (
        <>
         <h2>Subtotal:<small>₦{getCartTotal()}</small></h2>        
        {
          cartItems.map((el)=>(
            <div className="cartdis" key={el.id}>
         
         <div className="dinfo">
         <img src={el.image}/>
          <span >
          <h3>{`${el.Topic} Certification Exam`}</h3>
          <p>{`₦${el.price}`}</p>
          </span>
        </div>   
        
       <div className="quant">
        <h2>Quantity</h2>
       <div className="numbtn">  
          <button onClick={()=>{removeFromCart(el)}}>-</button>
          <h5>{el.quantity}</h5>
          <button onClick={()=>{addToCart(el)}}>+</button>
        </div>
       </div>

        </div>
          ))
        }
        <div className="checkbtn">
          <button>Checkout ₦{getCartTotal()}</button>
        </div>
        </>
       ):
        
       (  <div className="empty"> 
          <p>Your Cart is empty</p>
         </div>)
         }
    </section>
  )
}

export default Cart