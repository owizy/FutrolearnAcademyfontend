import React, { useState } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import"./Admin.css"
import { useContext ,useEffect} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../utils/Service';
import { AuthContext } from '../context/AuthContext';

function AdminHome() {
const {theme}=useContext(ThemeContext)
const {User} =useContext(AuthContext)
const[Count,SetCount]=useState("")
const navigate =useNavigate()
const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      useEffect(() => {
        const fetchUsers = async () => {
        try{
          if(Count.length !== 0 ){
            console.log("user")
           }else if(Count.length === 0){
            const res = await fetch(`${baseUrl}/users/${User?._id}/getalluser`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            });
            if(!res.ok){
              return console.log('failed to fetch user')
            }
            const resData = await res.json()
              SetCount(resData)
           }else{
            console.log("form")
           }  
        }catch(err){
          console.log("error occured",err)
        }                       
       } 
      fetchUsers()
     }, [User])
    return (
        <main className='main-container' style={{backgroundColor:theme ==="light-theme" ? "#fff" :"#1d2634 ", color:theme === "light-theme"? "#000" :"#fff"}}>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card' onClick={()=>navigate('/user/all/student')}>
                <div className='card-inner'>
                    <h3>STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{Count.length !==0 && Count.length}</h1>
                <h1>{Count.length ===0 && <div className="loader" style={{margin:"10px"}}>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
</div>
}</h1>
            </div>
            <div className='card'>
                <div className='card-inner' onClick={()=>navigate('/admin/messages')}>
                    <h3>Messages</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1></h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>

  )
}

export default AdminHome