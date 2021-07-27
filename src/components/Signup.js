import React from "react";
import { signup } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(this.state);
      toast.success("Sign up successful");
      this.props.history.push("/login");
    } catch (e) {
      toast.error("Not possible to signup");
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <section className="Form">
          <div>
            <form onSubmit={this.handleFormSubmit}>
              <div className="Fill">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={username}
                />
              </div>

              <div className="Fill">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={password}
                />
              </div>
              <div>
                <button className="butts" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
            </div>
            <div className="Donthave">
              <p>
                <NavLink to="/login">Already have an account?</NavLink>
              </p>
            </div>
          
        </section>
      </>
    );
  }
}
export default Signup;
