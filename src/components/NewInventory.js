import React from "react";
import { newInventory } from "../api";
import { toast } from "react-toastify";

class CreateInventory extends React.Component {
  state = {
    title: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const newInv = {
      title: this.state.title,
    };

    await newInventory(newInv);
    console.log(newInv);
    toast.success("Inventory created");
    this.props.history.push("/myinventories/");
  };

  render() {
    const { title } = this.state;
    return (
      <>
        <section className="Form">
          
            <h2>New Inventory</h2>
            <form onSubmit={this.handleFormSubmit}>
              <div className="Fill">
                <label>Title</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="title"
                  value={title}
                />
              </div>
              <div>
                <button className="butts" type="submit">
                  Create
                </button>
              </div>
            </form>
          
        </section>
      </>
    );
  }
}

export default CreateInventory;
