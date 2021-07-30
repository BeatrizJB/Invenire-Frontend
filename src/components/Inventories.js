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
        <section className="Inventories">
          <h2>Inventories</h2>
          <div className="Invs-all">
            {this.state.allInv.map((inv) => {
              return (
                <>
                  <div className="Inv-card">
                    <h2 key={inv._id}>
                      <NavLink to={`myinventories/${inv._id}`}>
                        {inv.title}
                      </NavLink>
                    </h2>
                    <div className="Invs-body">
                      {inv.listItems.map((item) => {
                        return <p>{item.designation}</p>;
                      })}
                    </div>
                  </div>
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
