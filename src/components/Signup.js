import React from "react";
import { signup } from "../api";
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
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">Signup</button>
        </form>

      </>
    );
  }
}
export default Signup;
