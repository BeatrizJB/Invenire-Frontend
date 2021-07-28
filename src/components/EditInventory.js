import React from "react";
import { updateTitle, editItem, itemSpecs } from "../api";
import { toast } from "react-toastify";


class EditInventory extends React.Component {
  state = {
    title: "",
    items: [
      {
        designation: "",
      },
    ],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const titleUp = {
      title: this.state.title,
    };

    await updateTitle(titleUp);
    console.log(titleUp);
    toast.success("Title updated");
    this.props.history.push("/");

    // const itemUp = {
    //   designation: this.state.designation
    // };
    // await editItem(itemUp);
    //     console.log(itemUp);
    //     toast.success("Item updated");
    //     this.props.history.push("/");




  };

  render() {
    const { title } = this.state;
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

          <button className="butts" type="submit">
            Create
          </button>
        </form>
      </>
    );
  }
}

export default EditInventory;