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
      <p>Welcome {loggedInUser.username}</p>
      <ul>
        <li>
          <NavLink to="/">
            <button onClick={logoutUser}>Logout</button>
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="list">
            My Inventories
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="">
            Add Project
          </NavLink>
        </li>
      </ul>
    </>
  ) : (
    <ul>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/">
          Home
        </NavLink>
      </li>

    </ul>
  );
}
export default Navbar;
