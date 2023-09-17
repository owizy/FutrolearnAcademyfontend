import { Routes ,Route } from 'react-router-dom';
import Demo from "./pages/Demo"
import AllCourse from './pages/AllCourse';
import Coursesinfo from './pages/Coursesinfo';
import Login from './pages/Login';
import Register from './pages/Register';
import Pagenotfound from './pages/Page404';
import Home from './pages/Home';
import Homecourses from './pages/Homecourses';
import Courselearning from './pages/Courselearning';
import Getceritiied from './pages/Getceritiied';
import Cart from './componets/Cart';
import Certificate from './pages/Certificate';
import Othercourseinfo from './componets/Othercourse';
import Feedback from './pages/Feedback';
import Profile from './pages/Profile';
import AdminContainer from "./AdminDashboard/AdminContainer.js"
import AdminSetting from './AdminDashboard/AdminSetting';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import AdminSignup from './AdminDashboard/AdminSignup';
import Forget from './AdminDashboard/Forget';
import ResetPassword from './AdminDashboard/Reset';
import Verification from './AdminDashboard/Verification';
import Passwesetconfiremed from './AdminDashboard/Passwesetconfiremed';
import StudentLenght from './AdminDashboard/StudentLenght';
import AdminMessage from './AdminDashboard/AdminMessage';
import StudentGroupChat from './pages/StudentGroupChat';
import loader from "./image9/Pulse-1s-200px.gif"
function App() {
  const{User}=useContext(AuthContext)
  const[isloading,Setisloading]=useState(true)

  useEffect(()=>{

    setTimeout(() => {
      Setisloading(false)
    }, 4000);
  },[]) 
  return (
      <>
      
      {
      
      isloading ?
        <>
        <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff"}}>
          <img src={loader}  width={100}/>
        </div>
        </>
        
        
       :
      <Routes> 

        
        
        
         <Route  path='/course'  element={<AllCourse/>}/>  
         <Route path='/course/info/:Topic' element={<Coursesinfo/>}/>
          <Route path='/login' element={!User ? <Login/> : User?.UserType==="student" ?<Home/> : <AdminContainer/>}/>
          <Route path={!User ?"/home" : User?.UserType==="student" ? "/home" : "/admin"}   element={!User ? <Login/>  : User?.UserType==="student" ?<Home/> : <AdminContainer/>  }/>
          <Route path='*' element={<Pagenotfound/>}/>
          <Route path={'/'} element={User ? ( User?.UserType === "student" ? <Home/> : <AdminContainer/> )  : (<Demo/>  )}/>
             <Route path={"/signup"} element={!User  ?  <Register/>  :  User?.UserType==="student" ? <Home/> : <Login/>}/>
           <Route path='/home/courses' element={User  && <Homecourses/>}/>    
        <Route path={User?.UserType==="student" ? '/learn/:Topic':"/login"} element={!User ?<Demo/>: User?.UserType==="student" ? <Courselearning/> :<Login/>}/>
         
        <Route  path={User?.UserType==="student" ? '/product/:Topic':"/login"} element={!User ?<Demo/>: User?.UserType==="student" ? <Getceritiied/>:<Login/>}/>
        
        <Route path={User?.UserType==="student" ? '/product/cart' :"/login"} element={!User ?<Demo/>:User?.UserType==="student" ? <Cart/>:<Login/>}/>
     <Route path={User?.UserType==="student" ? '/certificate':"/login" } element={!User ?<Demo/>: User?.UserType==="student" ? <Certificate/> : <Login/>}/>
      <Route path={User?.UserType==="student" ?'/othercourses' :"/login"} element={!User ?<Demo/>:User?.UserType==="student" ?<Othercourseinfo/>:<Login/>}/>
     
      <Route path={User?.UserType==="student" ? '/feedback':"/login"} element={!User ?<Demo/>:User?.UserType==="student" ? <Feedback/>:<Login/>}/>
        <Route path={!User? '/user/profile':User?.UserType==="student" ? '/user/profile':"/login"} element={!User? <Login/>  :User?.UserType==="student" ? <Profile/>:<Login/>}/>
        <Route path={User?.UserType==="student" ?"/admin":"/login"} element={User?.UserType==="Admin" ? <AdminContainer/>:<Login/>}/>
        <Route path={'/admin/setting' } element={!User? <Login/>  : User?.UserType==="Admin" ? <AdminSetting/> : <Login/>}/> 
        <Route path='/admin/signup' element={!User? <AdminSignup/> :User?.UserType==="Admin" && <AdminContainer/>   }/>
        <Route path='/forgetPassword' element={<Forget/>}/>
        <Route  path="/reset_password/:id/:token"  element={<ResetPassword/>}/>
        <Route path='/user/link/verify' element={<Verification/>}/>
        <Route path='/sucess/resetpassword' element={<Passwesetconfiremed/>}/>
        <Route  path='/user/all/student'element={<StudentLenght/>}/>
        <Route path='/admin/messages' element={<AdminMessage/>}/>
        <Route path='/student/chat' element={<StudentGroupChat/>}/>
        
        
      </Routes>
}
      </>
  );
}

export default App;
