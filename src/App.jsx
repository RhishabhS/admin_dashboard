import React, { useEffect } from 'react'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import './App.css'
import Home from './pages/home/Home'
import { Navigate, Outlet } from 'react-router-dom'
const App = () => {
  const user=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
  const admin=user?user.isAdmin: false;
  if(!admin) return <Navigate to='/login'/>
  return (
    <div>
      <TopBar/>
      <div className='container'>
        <SideBar/>
        <div className="others">
          <Outlet/>
        </div>
        
      </div>

      
    </div>
  )
}

export default App  