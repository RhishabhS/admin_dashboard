import React from 'react'
import './NewUser.css'
const NewUser = () => {
  return (
    <div className='new-user'>
        <h1 className="new-user-title">New User</h1>
        <form action="" className="new-user-form">
            <div className="new-user-item">
                <label> Username</label>
                <input type='text' placeholder='Username'></input>
            </div>
            <div className="new-user-item">
                <label> Full Name</label>
                <input type='text' placeholder='Name'></input>
            </div>
            <div className="new-user-item">
                <label> Username</label>
                <input type='email' placeholder='Email'></input>
            </div>
            <div className="new-user-item">
                <label> Password</label>
                <input type='password' placeholder='Password'></input>
            </div>
            <div className="new-user-item">
                <label> Phone</label>
                <input type='text' placeholder='Phone Number'></input>
            </div>  
            <div className="new-user-item">
                <label> Active</label>
                <select type='text'className='new-user-select' name='active' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div> 
            <button className="new-user-button">Create</button> 
        </form>
    </div>
  )
}

export default NewUser