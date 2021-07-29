import React from "react";
import { inventory, createItem } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Inventory extends React.Component {
  state = {
    title: "",
    designation: '',
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
    event.preventDefault();

    const item = {
      designation: this.state.designation,
    };
    console.log(item);
    await createItem(this.props.match.params.invId, item);

    toast.success("Item added");
    this.props.history.push(`/myinventories/${this.props.match.params.invId}`);
  };

  render() {
    const { title, designation, listItems } = this.state;
    return (
      <>
        <section>
          <div className="Addform">
            <h3>
              Add Items to <em>{title}</em>
            </h3>
            <form onSubmit={this.handleFormSubmit}>
              <div className="Add">
                <label>Designation</label>
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

          <div className="Inventorydisplay">
            <h2>{title}</h2>
            <ul>
              {listItems.map((item) => {
                return (
                  <>
                    <li>
                      Item:{" "}
                      <NavLink
                        to={`/myinventories/${this.props.match.params.invId}/itemspecs/${item._id}`}
                      >
                        {item.designation}
                      </NavLink>
                    </li>
                    <li>Category: {item.category}</li>
                    <li>Quantity: {item.quantity}</li>
                    <li>Description: {item.description}</li>
                    <li>Location: {item.location}</li>
                    <li>
                      Photo/Image:
                      <img className="Invpic" src={item.imageUrl} />
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="Linkto">
            <NavLink
              to={`/myinventories/editinv/${this.props.match.params.invId}`}
            >
              Edit Inventory
            </NavLink>
          </div>
        </section>
      </>
    );
  }
}

export default Inventory;
