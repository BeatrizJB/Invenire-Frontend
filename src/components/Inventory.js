import React from "react";
import { inventory, createItem } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Inventory extends React.Component {
  state = {
    title: "",
    designation: "",
    listItems: [],
  };

  async componentDidMount() {
    const response = await inventory(this.props.match.params.invId);
    this.setState({
      title: response.data.title,
      listItems: response.data.listItems,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    // event.preventDefault();

    const item = {
      designation: this.state.designation,
    };
    await createItem(this.props.match.params.invId, item);

    // this.props.history.push(`/myinventories/${this.props.match.params.invId}`);
  };

  render() {
    const { title, designation, listItems } = this.state;
    return (
      <>
        <section className="Inventories">
          <div className="Linkto">
            <NavLink
              to={`/myinventories/editinv/${this.props.match.params.invId}`}
            >
              Edit Inventory
            </NavLink>
          </div>
          <div className="Addform">
            <h4>
              Add Items to <em>{title}</em>
            </h4>
            <form onSubmit={this.handleFormSubmit}>
              <div className="Add">
                <label>Item</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="designation"
                  value={designation}
                />
              </div>

              <div>
                <button className="Butts" type="submit">
                  Add Item
                </button>
              </div>
            </form>
          </div>
          <div className="Inventory">
            <h2>{title}</h2>
            <div className="Sing-inv">
              {listItems.map((item) => {
                return (
                  <>
                    <div className="Inv-body">
                      <h4>
                        <NavLink
                          to={`/myinventories/${this.props.match.params.invId}/itemspecs/${item._id}`}
                        >
                          {item.designation}
                        </NavLink>
                      </h4>
                      <p>{item.category}</p>
                      <p>{item.quantity}</p>
                      <p>{item.description}</p>
                      <p>{item.location}</p>
                      <img className="Invpic" src={item.imageUrl} alt="" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Inventory;
