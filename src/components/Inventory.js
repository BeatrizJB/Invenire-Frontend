import React from "react";
import { inventory } from "../api";
import { NavLink } from "react-router-dom";

class Inventory extends React.Component {
  state = {
    singleInv: [],
  };

  async componentDidMount() {
    const response = await inventory();
    this.setState({
      singleInv: response.data,
    });
  }

  render() {
    return (
      <>
        <section>
          <div>
          <h2>yo</h2>
            {this.state.singleInv.map((inv) => {
              return (
                <>
                  <h2 key={inv._id}>{inv.title}</h2>
                  <div>
                  <ul>
                    {inv.listItems.map((item) => {
                      return (
                        <li>
                          <NavLink to={`myinventories/${item._id}`}>
                          {item.designation}
                          </NavLink>
                          
                        </li>
                      );
                    })}
                  </ul></div>
                </>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Inventory;
