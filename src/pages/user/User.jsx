import React from "react";
import "./User.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">User Details</h1>
        <Link to='/newUser'><button className="user-add-button">Create</button></Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img src="" alt="" className="user-show-img" />
            <div className="user-show-top-title">
                <span className="user-show-username">Sanjana</span>
                <span className="user-show-usertitle">The Sun</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-info">
            <PermIdentityIcon className="user-show-info-icon"/>
            <span className="user-show-info-title">sanju</span>
            </div>
            <div className="user-show-info">
            <PermContactCalendarIcon className="user-show-info-icon"/>
            <span className="user-show-info-title">99999999999</span>
            </div>
            <div className="user-show-info">
            <EmailIcon className="user-show-info-icon"/>
            <span className="user-show-info-title">sanju@sun.com</span>
            </div>
            <div className="user-show-info">
            <CakeIcon className="user-show-info-icon"/>
            <span className="user-show-info-title">XX-XX-XXXX</span>
            </div>
          </div>
        </div>
        <div className="user-update">
            <span className="user-update-title">Edit</span>
            <form action="" className="user-update-form">
                <div className="user-update-left">
                    <div className="user-update-item">
                        <label>Username</label>
                        <input type="text" placeholder='sanju' className="user-update-input" />
                    </div>
                    <div className="user-update-item">
                        <label>Full Name</label>
                        <input type="text" placeholder='Sanjana' className="user-update-input" />
                    </div>
                    <div className="user-update-item">
                        <label>Email</label>
                        <input type="text" placeholder='sanju@sun.com' className="user-update-input" />
                    </div>
                </div>
                <div className="user-update-right">
                    <div className="user-update-upload">
                    <img src="" alt="" className="user-update-img" />
                    <label htmlFor='file'><PublishIcon className="user-update-icon"/></label>
                    <input type="file" id='file' style={{display:"none"}}/>
                    </div>
                    <button className="user-update-button">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default User;
