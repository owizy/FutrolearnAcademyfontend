import React, { useContext } from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsSearch, BsJustify}
 from 'react-icons/bs'
 import"./Admin.css"
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'
import { Avatar } from '@mui/material'
import baseUrl from '../utils/Service'

function AdminHeader({OpenSidebar}) {
  const {theme} =useContext(ThemeContext)
  const{User,UserProfile} = useContext(AuthContext)
  return (
    <header className='header' style={{backgroundColor:theme ==="light-theme" ? "whitesmoke" :"#1d2634 ", color:theme === "light-theme"? "#000" :"#fff"}}>
    <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar}/>
    </div>
    <div className='header-left'>
        <BsSearch  className='icon'/>
    </div>
    <div className='header-right' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <Avatar alt={User?.fullname}  src={`${  UserProfile?.image||UserProfile?.data?.image}`} sx={{cursor:"pointer",}} className='avatar' /> 
    </div>
</header>

  )
}

export default AdminHeader
