import React, { useContext } from 'react'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import"./Admin.css"
import { ThemeContext } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'
function AdminSidebar({openSidebarToggle, OpenSidebar}) {
    const {theme}=useContext(ThemeContext)
    const navigate = useNavigate()
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""} style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#1d2634 ", color:theme === "light-theme"? "#000" :"#fff"}}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <div className="logo">
<div className="f-letter">Futurolearn</div>
<span className="text">Academy</span>
</div>              
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
  
                    <BsGrid1X2Fill className='icon'/> Dashboard
  
            </li>
            <li className='sidebar-list-item'>
                    <BsFillArchiveFill className='icon'/> Products
  
            </li>
            <li className='sidebar-list-item'>

                    <BsFillGrid3X3GapFill className='icon'/> Categories
               
            </li>
            <li className='sidebar-list-item' onClick={()=>navigate('/user/all/student')}>
               
                    <BsPeopleFill className='icon'/> STUDENTS
                           </li>
            <li className='sidebar-list-item'>
               
                    <BsListCheck className='icon'/> Inventory
                           </li>
            <li className='sidebar-list-item'>
               
                    <BsMenuButtonWideFill className='icon'/> Reports
               
            </li>
            <li className='sidebar-list-item' onClick={()=>navigate('/admin/setting')}>
              
                    <BsFillGearFill className='icon'/> Setting
                
            </li>
        </ul>
    </aside>

  )
}

export default AdminSidebar