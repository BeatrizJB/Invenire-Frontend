import React from "react";
import { myInventories } from "../api";
import { NavLink } from "react-router-dom";

class Inventories extends React.Component {
  state = {
    allInv: [],
  };

  async componentDidMount() {
    const response = await myInventories();
    this.setState({
      allInv: response.data,
    });
  }

  render() {
    return (
      <>
        <section>
          <h2>My Inventories</h2>
          <div>
            {this.state.allInv.map((inv) => {
              return (
                <>
                  <h2 key={inv._id}>
                  <NavLink to={`myinventories/${inv._id}`}>{inv.title}</NavLink>                
                  </h2>
                  <ul>
                    {inv.listItems.map((item) => {
                      return <li>{item.designation}</li>;
                    })}
                  </ul>
                </>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Inventories;
