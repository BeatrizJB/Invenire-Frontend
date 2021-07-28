import React from "react";
import { inventory, deleteInventory } from "../api";
import { NavLink } from "react-router-dom";

class Inventory extends React.Component {
  state = {
    title: "",
    listItems: [],
  };

  async componentDidMount() {
    const response = await inventory(this.props.match.params.invId);
    this.setState({
      title: response.data.title,
      listItems: response.data.listItems,
      
    });
  }

  /* <NavLink to={`myinventories/${item._id}`}>{item.designation}</NavLink> */

  render() {
    const { title, listItems } = this.state;
    return (
      <>
        <section>
          <div>
            <h2>yo</h2>
            <h2>{title}</h2>
            <ul>
              <ul>
                {listItems.map((item) => {
                  return (
                    <>
                      <li>
                        <NavLink to={`myinventories/${item._id}`}>
                          {item.designation}
                        </NavLink>
                      </li>
                      <li>{item.category}</li>
                      <li>{item.quantity}</li>
                      <li>{item.description}</li>
                      <li>{item.location}</li>
                      <li>{item.imageUrl}</li>
                    </>
                  );
                })}
              </ul>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Inventory;
