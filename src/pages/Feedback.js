import {  useContext, useState } from "react"
import emailjs from '@emailjs/browser';
import "../css/Feed.css"
import HomeHeader from "../componets/HomeHeader";
import { ThemeContext } from "../context/ThemeContext";
function Feedback() {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
     const{theme}=useContext(ThemeContext)
    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.send('service_127a53i', 'template_ajht0ib', {
            from_name: subject,
            to_name:"futrolearnacademy@gmail.com",
            email_subject: ` Feedback from ${recipient}`,
            message: message,
                   
        }, 'dBezy9oV8n7YL5v_h')
        .then((response) => {
            setMessage('')
            setRecipient('')
            setSubject('')
            console.log('Email sent successfully:', response);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
           
    }
    
    
  return (
    <section className='feedbackcont' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#11161A", color:theme === "light-theme"? "#000" :"#fff"}}>
        <HomeHeader/>
        <h1 >Write a Feedback</h1>
        <form  onSubmit={sendEmail}>
 
          
        <input type='text' placeholder='Enter your name'  value={recipient}
          onChange={(e) => setRecipient(e.target.value)} style={{border:theme !=='light-theme'&& "3px solid #fff"}}/>
     
       
        <input type='email' placeholder='Enter your email'                     value={subject}
                    onChange={(e) => setSubject(e.target.value)} style={{border:theme !=='light-theme'&& "3px solid #fff"}}/>
     
        <textarea rows={`5`} cols={`30`}                     value={message}
                    onChange={(e) => setMessage(e.target.value)}
/>
        <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Feedback