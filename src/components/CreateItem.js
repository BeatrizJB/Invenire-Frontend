import React from "react";
import { inventory, createItem } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";


class CreateItem extends React.Component {
  state = {
    title: "",
    designation: "",
  };

  async componentDidMount() {
    const response = await inventory(this.props.match.params.invId);
    this.setState({
      title: response.data.title,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const items = {
      designation: this.state.designation,
    };

    await createItem(
      this.props.match.params.invId,
      this.props.match.params.itemId,
      items
    );
    // console.log(newInv);
    toast.success("Item added");
    this.props.history.push("/myinventories/additems/:invId");
  };

  handleChangeFile = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  render() {
    const { title, designation } =
      this.state;
    return (
      <>
        <section className="Bigform">
          <h2>Add Items to ___ {title}</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div className="Longfill">
              <label>Item</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="designation"
                value={designation}
              />
            </div>
            
            <div className="Buttsdiv">
              <button className="butts" type="submit">
                Add Item
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default CreateItem;
