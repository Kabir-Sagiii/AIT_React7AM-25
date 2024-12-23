import React from "react";
import "./Profile.css";
import { Link, Outlet } from "react-router-dom";
function ProfileContainer() {
  return (
    <div className="mainProfileContainer">
      <div className="mainContainerLeftPanel">
        <div>
          <Link to="redux">Redux</Link>
          <hr />
        </div>
        <div>
          <Link to="details">Personal Details</Link>
          <hr />
        </div>
        <div>
          <Link to="address">Address</Link>
          <hr />
        </div>
        <div>
          <Link to="orders">Orders</Link>
          <hr />
        </div>
        <div>
          <Link to="changepassword">Change Password</Link>
          <hr />
        </div>
        <div>
          <Link to="wishlist">Wishlist</Link>
          <hr />
        </div>
      </div>
      <hr />
      <div className="mainContainerRightPanel">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileContainer;
