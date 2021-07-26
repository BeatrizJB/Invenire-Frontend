import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";

function Navbar({ loggedInUser, setLoggedInUser }) {
  const logoutUser = async () => {
    await logout();
    setLoggedInUser(null);
  };
  return loggedInUser ? (
    <>
      <div>
        <div>
          <p>Welcome</p>
          <p>{loggedInUser.username}</p>
        </div>
        <div>
          <p>
            <NavLink activeStyle={{ color: "red" }} exact to="list">
              My Inventories
            </NavLink>
          </p>
        </div>
        <div>
          <p>
            <NavLink to="/">
              <button className="butts" onClick={logoutUser}>Logout</button>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  ) : (
    <div>
      <div>
        <p>
          <NavLink activeStyle={{ color: "green" }} exact to="/">
            Home
          </NavLink>
        </p>
      </div>
      <div>
        <p>
          <NavLink activeStyle={{ color: "green" }} exact to="/signup">
            Sign Up
          </NavLink>
        </p>
      </div>
      <div>
        <p>
          <NavLink activeStyle={{ color: "green" }} exact to="/login">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}
export default Navbar;
