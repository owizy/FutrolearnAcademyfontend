import { useContext, useState } from 'react'
import"./Admin.css"
import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"
import AdminHome from "./AdminHome"
import { ThemeContext } from '../context/ThemeContext'
function AdminContainer(){
    const [openSidebarToggle, setOpenSidebarToggle] =useState(false)
    const{theme}=useContext(ThemeContext)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#1d2634 ", color:theme === "light-theme"? "#000" :"#fff"}}>
      <AdminHeader OpenSidebar={OpenSidebar}/>
         <AdminSidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
         <AdminHome/>
    </div>

  )
}

export default AdminContainer