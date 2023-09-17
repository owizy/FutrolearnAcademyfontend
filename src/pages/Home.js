import HomeHeader from "../componets/HomeHeader"
import "../css/Home.css"
import hmm from "../image8/yshirt.png"
import { useContext, useEffect, useState ,useRef} from "react"
import { CourseData } from "../utils/Coursedata"
import HCoursedetail from "../componets/HCoursedetail"
import { ThemeContext } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom"
import SmsIcon from '@mui/icons-material/Sms';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Messsage from "../componets/Message"
import CancelIcon from '@mui/icons-material/Cancel';
import { AuthContext } from "../context/AuthContext"
import baseUrl from "../utils/Service"
import { io } from 'socket.io-client'
const feature = CourseData.slice(0,12)
function Displaychat(){
 const show = localStorage.getItem("chats")      
 if(!show){
  localStorage.setItem("chats",'false')
  return 'false'
 }else{
  return show
 }
}
const socket =  io('https://futrolearnacademy-server.onrender.com')
function Home() {
  const[featured]=useState(feature)
  const messageRef = useRef(null)

  const{theme}=useContext(ThemeContext)
  const {User,conversation,}=useContext(AuthContext)
  const[showchat,Setshowchat]=useState(Displaychat)
  const[messages,setMessages]=useState([])
  const[showMessages,SetshowMessages]=useState(false)
  const [content,setcontent]=useState("")
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  console.log("mess",messages)
  function Toggleshow(){
    if(showchat === 'false'){
      Setshowchat("true")
    }else{
      Setshowchat("false")

    }
  }
  

  // message
  const fetchNewMessages = async (conversationId) => {
    const res = await fetch(`${baseUrl}/api/messsage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        conversationId:conversationId,
        senderId:User?._id,
        receiverId:`64f0974031bdfca83e489b29`
      })
    });
    if(!res.ok) return console.log("err",res)
    const resData = await res.json()
    setMessages({ messages: resData, receiver:"64f0974031bdfca83e489b29",  })
  }
  
  const fetchMessages = async (conservationId, receiver) => {
   try{ 
    SetshowMessages(true)
    const res = await fetch(`${baseUrl}/api/messsage/${conversation.length !==0 && conversation[0].conversationId}?senderId=${User?._id}&&receiverId=64f0974031bdfca83e489b29`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    SetshowMessages(false)
    if(!res.ok) return console.log("failed to fetch message")
    const resData = await res.json()
    setMessages({ messages: resData, receiver,conservationId:conversation.length !==0 && conversation[0].conversationId})
   
   }catch(err){
    console.log("error occured",err)
   } 

  }
  
  


  
  const navigate =useNavigate()





  const sendMessage=async(e)=>{
    e.preventDefault();

    await socket.emit('sendMessage',  {
      senderId: User?._id,
      message:content,
      conversationId:messages?.conservationId,
      receiverId:"64f0974031bdfca83e489b29",
     
    
    });
    try{
      // await fetch(`${baseUrl}/api/messsage`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     senderId: User?._id,
      //     message:content,
      //     conversationId: messages?.conversationId,
      //     receiverId: messages?.receiver?.receiverId
      //       })
      // });
       setcontent("")
    }catch(err){
      console.log("errmess",err)
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

      console.log("data",data)
    };
  
    socket?.on('getMessage', handleMessage);
  
    return () => {
      // Clean up the event listener when the component unmounts
      socket.off('getMessage', handleMessage);
    };
  
   
  },[socket])
   

  useEffect(() => { 
    messageRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // console.log("conversate",conversation) 
  // console.log("conversateId",conversation.length !==0 && conversation[0].conversationId)

  return (
    <section style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff"}}>
       <HomeHeader/>
       <div className="hbans">
         <div className="hdetal">
         <h1>Embrace Tomorrow's Learning Today Unleash Your Potential with Futro Academy!</h1>
         <button onClick={()=>{return(navigate('/home/courses'), scrollToTop())}}>View Courses</button>
          </div> 
         <div className="hmmimg">
        <img src={hmm} width={400}/>
       </div>
       </div>
       
       <div className="hcourses">
        <h1>Courses</h1>
         <div className="cosdetcont" style={{marginBottom:"50px"}}>
         {
          featured.map((el)=>{
            return <HCoursedetail props={el} key={el.id}/>
          })
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
       <div className="chatss">
      {
        showchat === "true" &&       
        <div className="chatcontainers" >
              <div className="chatinformations">
               <p style={{color:"white"}}> <button onClick={()=>Toggleshow()} style={{backgroundColor:"transparent",outline:"none",border:"none",cursor:"pointer"}} className="chatscloses"><CancelIcon sx={{fontSize:"50px"}} className="cancless"/></button>  👋 Hi there! If you have any questions, or  would you need our assistance  or having an issue with the application, please message us. We’re happy to   assist you.</p>
             </div>
             <div className="chatbox">
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
    display:`${showMessages ? "flex":"none"}`,
    justifyContent:"center",
    alignItems:"center",
      height:"100%"
  }} className='bacl'>
    
<div className="loader">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div>
  </div>
}


                  </div>
             <form className="chatinnput"  onSubmit={sendMessage}> 
               <input  type="text" placeholder="Write a message" required  name="content" value={content} onChange={(e)=>setcontent(e.target.value)}/> 
                <button type="submit" > 
                <SendIcon sx={{fontSize:"30px", color:"#fff" }}   />
                </button>
               
                          </form>
             </div>
      }
        <div className="chatsschildss" > 
        
       { showchat === "false" ? <> <span style={{display:"flex",gap:"5px"}} onClick={()=>{return Toggleshow(),conversation.length !==0 ? fetchMessages(conversation.length !==0 && conversation[0]?.conversationId,User) :fetchNewMessages('new') }}> <SmsIcon sx={{fontSize:"45px", }} className="sms"/> <h1>Chat</h1> </span>
       </> :<span onClick={()=>Toggleshow()}><CloseIcon sx={{fontSize:"45px"}} /> </span>     } </div>
         
       </div>
    </section>
  )
}

export default Home
