import React from "react";
import { newInventory } from "../api";
import { toast } from "react-toastify";

class CreateInventory extends React.Component {
  state = {
    title: "",
    items: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const newList = {
      title: this.state.title,
      items: this.state.items,
    };

    await newInventory(newList);

    toast.success("Inventory created");
    this.props.history.push("/home");
  };

  render() {
    const { title, items } = this.state;
    return (
      <>
        <h2>Add Project</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="title"
            value={title}
          />
          <label>Items</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="items"
            value={items}
          />
          <button className="butts" type="submit">
            Create
          </button>
        </form>
      </>
    );
  }
}

export default CreateInventory;
