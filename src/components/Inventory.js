import React from "react";
import { inventory } from "../api";
import { NavLink } from "react-router-dom";

class Inventory extends React.Component {
  state = {
    title: "",
    listItems: [{
      itemId: "",
      designation: "",
    }]
  };

  async componentDidMount() {
    const response = await inventory(this.props.match.params.id);
    this.setState({
      title: response.data.title,
      itemId: response.data._id,
      designation: response.data.designation,
    });
  }

/* <NavLink to={`myinventories/${item._id}`}>{item.designation}</NavLink> */
  
render() {
  const { title, itemId, designation} = this.state;
    return (
      <>
        <section>
          <div>
          <h2>yo</h2>
          <h2>{title}</h2>
          <ul>
            <li><NavLink to={`/myinventories`}>{designation}</NavLink></li>
          </ul>

          </div>
        </section>
      </>
    );
  }
}

export default Inventory;
