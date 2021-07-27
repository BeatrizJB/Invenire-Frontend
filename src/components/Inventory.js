import React from "react";
import { updateTitle, editItem, itemSpecs } from "../api";
import { toast } from "react-toastify";

class Inventory extends React.Component {
  state = {
    allInv: [],
  };

  async componentDidMount() {
    const response = await myInventory();
    this.setState({
      allInv: response.data,
    });
  }

  render() {
    return (
      <>
        <h2>My Inventories</h2>
        <div>
          {this.state.allInv.map((inv) => {
            return (
              <h3 key={inv._id}>
                <p>{inv.title}</p>
                <NavLink to={``}></NavLink>
              </h3>
            );
          })}
        </div>
      </>
    );
  }
}

export default Inventory;