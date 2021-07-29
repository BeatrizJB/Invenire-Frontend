import React from "react";
import { login } from "../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
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
      const user = await login(this.state);
      this.props.setLoggedInUser(user.data);
      toast.success("Login successful");
      this.props.history.push("/myinventories");
    } catch (e) {
      toast.error("Invalid login");
      console.log(e);
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <section className="Form">
          <div className="Form2">
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
                <div className="Form3">
                  <button className="butts" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="Donthave">
              <p>
                <NavLink to="/signup">Don't have an account?</NavLink>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Login;
