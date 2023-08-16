import React from "react";
import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from '@mui/icons-material/Help';
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">RS </span>
          <span className="logo-text">[Admin]</span>
        </div>
        <div className="top-right">
          <div className="top-icon-container">
            <span className="top-icon-badge">2</span>
            <NotificationsIcon style={{ color: "white", cursor: "pointer",position:"relative",top:"-5px" }} />  
          </div>
          <div className="top-icon-container">
            {/* <span className="top-icon-badge">2</span> */}
            <SettingsIcon style={{ color: "white", cursor: "pointer" }} />
          </div>
          <div className="top-icon-container">
            {/* <span className="top-icon-badge">2</span> */}
            <HelpIcon style={{ color: "white", cursor: "pointer" }} />
          </div>
          <img src="" className="top-avatar"></img>
        </div>
        
      </div>
    </div>
  );
};

export default TopBar;
