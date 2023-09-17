import "./Studentlen.css"
import { Avatar, } from '@mui/material'
import Messsage from "../componets/Message"
import { useContext, useEffect,useRef,useState} from "react"
import SendIcon from '@mui/icons-material/Send';
import baseUrl from "../utils/Service";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { io } from 'socket.io-client'
const socket =  io('http://localhost:9000')

function AdminMessage() {
 const navigate = useNavigate()
  const messageRef = useRef(null)
  const [content,setcontent]=useState("")
  const[messages,setMessages]=useState([])
  const{User,conversation}=useContext(AuthContext)
  const[showMessages,SetshowMessages]=useState(false)
  useEffect(() => {
    messageRef?.current?.scrollIntoView({ behavior: 'smooth' })
  },[messages])

   const [activemessageIndex, setActivemessageIndex] = useState(null);

   useEffect(() => {
     const storedmessageIndex = localStorage.getItem('activemessageIndex');
     if (storedmessageIndex !== null) {
       setActivemessageIndex(parseInt(storedmessageIndex));
     }
   }, []);
   
   const handleClick = (index) => {
     if (activemessageIndex === index) {
       setActivemessageIndex(null);
       localStorage.removeItem('activemessageIndex'); // Remove the item from localStorage when hiding
     } else {
       setActivemessageIndex(index);
       localStorage.setItem('activemessageIndex', index); // Store the index in localStorage
     }
   };


   
 const fetchMessages = async (conversationId, receiver) => {
  try{
    SetshowMessages(true)
    const res = await fetch(`${baseUrl}/api/messsage/${conversationId}?senderId=${User?._id}&&receiverId=${receiver.receiverId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    SetshowMessages(false)
    if(!res.ok) return console.log("failed to load messages")
    const resData = await res.json()
    setMessages({ messages: resData, receiver, conversationId })
  }catch(err){
    console.log("error occured",err)
  }
}

useEffect(()=>{
  socket.emit('addUser', User?._id);
  socket.on('getUsers', (users) => {
    console.log('activeUsers :>> ', users);
  })
},[User])

useEffect(() => {

  const handleMessage = (data) => {
    setMessages((el)=>[...el,data])
  };

  socket?.on('getMessage', handleMessage);

  return () => {
    // Clean up the event listener when the component unmounts
    socket.off('getMessage', handleMessage);
  };

 
}, [socket])

const sendMessage = async(e)=>{
  e.preventDefault();
  await socket.emit('sendMessage', {
    senderId: User?._id,
    message:content,
    conversationId: messages?.conversationId,
    receiverId: messages?.receiver?.receiverId,
   
  
  });
  try{
  //  await  fetch(`${baseUrl}/api/messsage`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       senderId: User?._id,
  //       message:content,
  //       conversationId: messages?.conversationId,
  //       receiverId: messages?.receiver?.receiverId
  //         })
  //   });
     setcontent("")
  }catch(err){
    console.log("errmess")
  }

}
console.log("mess",messages)
  return (
    <section className="messageconts">
        <div className="adminmessheader" onClick={()=>navigate('/admin')} style={{cursor:"pointer"}}>Message</div>
        <div className="mess1per">
            { conversation.length !==0 && conversation.map(({ conversationId, user, })=>( <>
             
             <div className="messpersons" onClick={()=>{return handleClick(conversationId),fetchMessages(conversationId,user)}} key={conversationId}>
             <Avatar alt={`${user.fullname}`}  src={`.static/.../es`}  /> 
             <p>{user.fullname}</p>
              </div>     
             {activemessageIndex === conversationId  &&  <div className="chatcontainers1" >
            
             <div className="chatbox1">
             {
							messages?.length !== 0  &&
								messages.map(({ message, user: { id } = {} , timestamp}) => {
									return (
										<>
										 <Messsage  isreadusermessage={id === User?._id} content={message} timestamp={timestamp}/>
										<div ref={messageRef}></div>
										</>
									)
								})

}
{
  <div style={{
    width:"100%",
    height:"100%",
    display:`${showMessages ? "flex":"none"}`,
   justifyContent:"center",
    alignItems:"center"
  }} className='bacl'>
    
<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div>
  </div> 
}
										
		              </div>
             <form className="chatinnput1" onSubmit={sendMessage}>  
               <input  type="text" placeholder="Write a message" required  name="content" value={content} onChange={(e)=>setcontent(e.target.value)}/> 
                <button type="submit" >  
                <SendIcon sx={{fontSize:"30px", color:"#fff" }}   />
                </button>
               
                          </form>
             </div>}

             
             </>
            )) 
            }

            {
              conversation.length ===0 &&
              <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontFamily:"sans-serif",
                color:"white",
                height:"50vh"
              }}>
                No conversation 
              </div>
            }
        </div>
    
    </section>
  )
}

export default AdminMessage