import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import "./HomeHeader.css"
import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChatIcon from '@mui/icons-material/Chat';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import baseUrl from '../utils/Service';
import  io  from 'socket.io-client';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const socket =  io.connect('https://futrolearnacademy-server.onrender.com')
function HomeHeader(){
  const{ToggleTheme,theme}=React.useContext(ThemeContext)  
   const{User,Logout,UserProfile}=React.useContext(AuthContext)


   const navigate = useNavigate()

  const Joingroupchat=()=>{
    socket.emit("joingroupchat","studentgroupchat")
    navigate(`/student/chat`)
  }


   // profile  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

// menu 
    const [state, setState] = useState({
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      
function scrollToTop() {
  window.scrollTo(0, 0);
}

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , backgroundColor:theme === "light-theme" ? "#fff" :"#141A1F"}}
          role="presentation"
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>   
              <ListItem  disablePadding>
                <ListItemButton>
                <div className="logo" onClick={()=>navigate('/home')}>
    <div className="f-letter">Futurolearn</div>
    <span className="text" style={{color: theme === "light-theme" ? "#2C3E50" :"#fff"}}>Academy</span>
  </div>
          </ListItemButton>
              </ListItem>
            
          </List>
          <Divider />
          <List>
          <ListItem  disablePadding>
                <ListItemButton  onClick={()=>{ return (navigate('/home') ,scrollToTop())}}>
              <ListItemIcon>
                <HomeIcon  sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
              </ListItemIcon>
                <ListItemText primary={'Home'} sx={{color:theme === 'light-theme' ?  "#000":"#fff"}}/>
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding>
                <ListItemButton onClick={()=>{ return (navigate('/home/courses') ,scrollToTop())}}>
              <ListItemIcon>
                <MenuBookIcon sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
              </ListItemIcon>
                <ListItemText primary={'Courses'} sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
                </ListItemButton>
              </ListItem>


              <ListItem  disablePadding>
                <ListItemButton>
             <ListItemIcon>
              {theme === "light-theme" ? <LightModeIcon sx={{color:"#000"}}/> : <DarkModeIcon sx={{color:"#fff"}}/>}
             </ListItemIcon>
              <ListItemIcon>

              {theme ==="light-theme" ? <Switch {...label} onClick={()=>ToggleTheme()}/> : <Switch {...label} defaultChecked  onClick={()=>ToggleTheme()}/>}  
              </ListItemIcon>
               
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
                <ListItemButton>
              <ListItemIcon>
                <NewspaperIcon sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
              </ListItemIcon>
                <ListItemText primary={'Blog'} sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
                </ListItemButton>
              </ListItem>
            
              <ListItem  disablePadding>
                <ListItemButton onClick={()=>Joingroupchat()}>
              <ListItemIcon>
                <ChatIcon sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
              </ListItemIcon>
                <ListItemText primary={'Student group chat'} sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
                </ListItemButton>
              </ListItem>
            
          </List>
          <Divider/>
          <List>
         
              <ListItem  disablePadding>
                <ListItemButton onClick={()=>navigate('/feedback')}>
              <ListItemIcon>
                <FeedbackIcon sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
              </ListItemIcon>
                <ListItemText primary={'Send feedback'} sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
                </ListItemButton>
              </ListItem>


              <ListItem  disablePadding>
                <ListItemButton onClick={()=>navigate('/user/profile')}>
              <ListItemIcon>
                <AccountCircleIcon sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
              </ListItemIcon>
                <ListItemText primary={'Profile'} sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
                <ListItemButton onClick={()=>Logout()}>
              <ListItemIcon>
                <LogoutIcon sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
              </ListItemIcon>
                <ListItemText primary={'Logout'} sx={{color: theme === "light-theme" ? "#000" :"#fff"}}/>
                </ListItemButton>
              </ListItem>
          </List>
          <Divider/>
          <List>
          <div className="footer" style={{marginTop:"0px", backgroundColor:"transparent",color:"#000"}}>

<div className="firsts" style={{color: theme === "light-theme" ? "#000" :"#fff"}}>
<div className="logo">
<div className="f-letter">Futurolearn</div>
<span className="text" style={{color: theme === "light-theme" ? "#2C3E50" :"#fff"}}>Academy</span>
</div>
<p style={{color: theme === "light-theme" ? "#000" :"#fff"}}>Learning often happens in <br/> classrooms but it<br/>doesn't have to.</p>
<p  style={{color: theme === "light-theme" ? "#000" :"#fff"}}>+2349021669864</p>
<p   style={{color: theme === "light-theme" ? "#000" :"#fff"}}>aowuye5@gmail.com</p>
</div>
<div className="forths">
<p  style={{color: theme === "light-theme" ? "#000" :"#fff"}}>&copy; Copy right  {new Date().getFullYear()} All right reserved .<br/> powered by CodeprofAcademy designed by Owuye Abdulmalik</p>
</div>
</div>
          </List>
        </Box>
      );
    
    return (
    <section className='hheader' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#13191E"}}>
        <div className='divs'>
        <React.Fragment key={123}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{color: theme === "light-theme" ? "#000":"#fff"}}/></Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>

           <div className="logo" onClick={()=>navigate('/home')}>
    <div className="f-letter">Futurolearn</div>
    <span className="text" style={{color: theme === "light-theme" ? "#2C3E50" :"#fff"}}>Academy</span>
  </div>
        </div>
        <div className='divs'>
       
       
        <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <Avatar alt={User?.fullname} src={`${baseUrl}/${UserProfile?.image ||UserProfile?.data?.image}`} style={{width:"50px",height:"50px",objectFit:"contain"}}/> 
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={()=>navigate('/user/profile')}>Profile</MenuItem>
        <MenuItem onClick={()=>Logout()}>Logout</MenuItem>
      </Menu>
        </div>
    </section>
  )
}

export default HomeHeader
