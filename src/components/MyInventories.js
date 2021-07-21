import React from "react";
import { getAllLists } from "../api";
import { NavLink } from "react-router-dom";

class Lists extends React.Component {
  state = {
    masterList: [],
  };

  async componentDidMount() {
    const response = await getAllLists();
    this.setState({
      masterList: response.data,
    });
  }

  render() {
    return (
      <>
        <h2>List of Projects</h2>
        <ul>
          {this.state.masterList.map((list) => {
            return (
              <li key={list._id}>
              <p>{list.title}</p>
                <NavLink to={`/projects/${list._id}`}>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Lists;
