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
      <div className="Directory">
      <section className="Navigation">
        <div>
          <p>
            <NavLink activeStyle={{ color: "green" }} exact to="/">
              Home
            </NavLink>
          </p>
        </div>
        <div>
          <p>
            <NavLink activeStyle={{ color: "green" }} exact to="/myinventories">
              Inventories
            </NavLink>
          </p>
        </div>
        <div>
          <p>
            <NavLink activeStyle={{ color: "green" }} exact to="/newinventory">
              New Inventory
            </NavLink>
          </p>
        </div>
        </section>
        <section className="Logged">
        <div >
          <p>Welcome <em>{loggedInUser.username}</em></p>
          
        </div>
        <div>
          <article>
            <NavLink to="/">
              <img
                src="https://res.cloudinary.com/b-jb/image/upload/v1627485674/invenire-testing/turn-off_oqnnit.png"
                alt="off icon"
                className="LogoutButt"
                onClick={logoutUser}
              />
            </NavLink>
          </article>
        </div>
        </section>
      </div>
    </>
  ) : (
    <div className="Directory">
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
