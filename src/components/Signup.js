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
        <section className="Auth">
          <div className="AuthForm">
            <div className="Add">
              <form onSubmit={this.handleFormSubmit}>
                <div className="Add">
                  <label>Username</label>
                  <input 
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                  />
                </div>

                <div className="Add">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={password}
                  />
                </div>
                <div className="Formbutt">
                  <button className="Butts" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="Howto">
                <p>Username should be unique</p>
                <p>
                  Password needs to have, at least, 6 characters with 1 number, 1 lower and 1 upper
                  case letter
                </p>
              </div>
            </div>
            <div className="Donthave">
              <p>
                <NavLink to="/login">Already have an account?</NavLink>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Signup;
