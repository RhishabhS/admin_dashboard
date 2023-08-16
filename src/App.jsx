import React from 'react'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import './App.css'
import Home from './pages/home/Home'
import { Outlet } from 'react-router-dom'
import { redirect } from 'react-router-dom'
const App = () => {
  const admin=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  useEffect(()=>{
    if(!admin) return <redirect to='/login'/>
  },[admin])
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