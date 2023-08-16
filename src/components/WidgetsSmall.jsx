import React, { useEffect, useState } from "react";
import "./WidgetsSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { userRequest } from "../redux/requestMethods";
const WidgetsSmall = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      const getUsers = async () => {
        const res = await userRequest.get("users/?new=true ");
        setUsers(res.data);
      };
      getUsers();
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Members</span>
      <ul className="widget-small-list">
        {users.map((user) => {
          <li className="widget-small-list-item">
            <img src={user.img|| "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnknown_person.jpg&psig=AOvVaw3SxNZgzKoXw5uRwgcPDplt&ust=1692202290671000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCelPWG34ADFQAAAAAdAAAAABAE"} alt="" className="widget-small-img" />
            <div className="widget-small-user">
              <span className="widget-small-username">Sanjana</span>
              <span className="widget-small-usertitle">Human Resources</span>
            </div>

            <button className="widget-small-button">
              <VisibilityIcon className="widget-small-icon" />
              Display
            </button>
          </li>;
        })}
        {/* <li className="widget-small-list-item">
          <img src="" alt="" className="widget-small-img" />
          <div className="widget-small-user">
            <span className="widget-small-username">Aditi</span>
            <span className="widget-small-usertitle">Architect</span>
          </div>
          <button className="widget-small-button">
            <VisibilityIcon className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img src="" alt="" className="widget-small-img" />
          <div className="widget-small-user">
            <span className="widget-small-username">Himani</span>
            <span className="widget-small-usertitle">Music Specialist</span>
          </div>
          <button className="widget-small-button">
            <VisibilityIcon className="widget-small-icon" />
            Display
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default WidgetsSmall;
