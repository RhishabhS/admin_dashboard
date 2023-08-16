import React from 'react'
import './SideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ShopIcon from '@mui/icons-material/Shop';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className='sidebar'>
         <div className="sidebar-wrapper">
            <div className="sidebar-menu">
            <h3 className="sidebar-title">
                Dashboard
            </h3>
            <ul className="sidebar-list">
                <Link to='/' className='link'>
                <li className="sidebar-list-item">
                    <HomeIcon className='sidebar-icon'></HomeIcon>
                     Home
                </li>
                </Link>
                <li className="sidebar-list-item">
                    <InsightsIcon className='sidebar-icon'/>
                     Analytics
                </li>
                <li className="sidebar-list-item">
                    <WhatshotIcon className='sidebar-icon'/>
                     Sales
                </li>
            </ul>
            </div>
            <div className="sidebar-menu">
            <h3 className="sidebar-title">
                Admin Menu
            </h3>
            <ul className="sidebar-list">
                    <Link to='/users' className='link'>
                <li className="sidebar-list-item">
                    <PeopleIcon className='sidebar-icon'/>
                     Users
                </li>
                    </Link>
                    <Link to='/products' className='link'>
                <li className="sidebar-list-item">
                    <ShopIcon className='sidebar-icon'/>
                     Products
                </li>
                    </Link>
                <li className="sidebar-list-item">
                    <PaidIcon className='sidebar-icon'/>
                     Transactions
                </li>
                <li className="sidebar-list-item">
                    <AssessmentIcon className='sidebar-icon'/>
                    Reports
                </li>
            </ul>
            </div>
            <div className="sidebar-menu">
            <h3 className="sidebar-title">
                Notifications
            </h3>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <HomeIcon className='sidebar-icon'></HomeIcon>
                     Email
                </li>
                <li className="sidebar-list-item">
                    <InsightsIcon className='sidebar-icon'/>
                     Feedback
                </li>
                <li className="sidebar-list-item">
                    <WhatshotIcon className='sidebar-icon'/>
                     Messages
                </li>
            </ul>
            
            </div>
            <div className="sidebar-menu">
            <h3 className="sidebar-title">
                Others
            </h3>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <AdminPanelSettingsIcon className='sidebar-icon'></AdminPanelSettingsIcon>
                     Manage
                </li>
                <li className="sidebar-list-item">
                    <InsightsIcon className='sidebar-icon'/>
                     Analytics
                </li>
                <li className="sidebar-list-item">
                    <InfoIcon className='sidebar-icon'/>
                     Reports
                </li>
            </ul>
            
            </div>
            
         </div>
    </div>
  )
}

export default SideBar