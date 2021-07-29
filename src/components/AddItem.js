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
      imageUrl: response.data.imageUrl,
    });
  }

  /* <NavLink to={`myinventories/${item._id}`}>{item.designation}</NavLink> */

  render() {
    const { listItems } = this.state;
    return (
      <>
        <section>
          <div>
            <h2>yo</h2>
            
            <ul>
              <ul>
                {listItems.map((item) => {
                  return (
                    <>
                    <h2>{item.designation}</h2>
                      
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
