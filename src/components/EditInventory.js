import React from "react";
import { updateTitle, deleteInventory, inventory } from "../api";
import { toast } from "react-toastify";

class EditInventory extends React.Component {
  state = {
    title: "",
  };

  handleDeleteInventory = async () => {
    await deleteInventory(this.props.match.params.invId);
    toast.success("Inventory deleted.");
    this.props.history.push("/myinventories");
  };

  async componentDidMount() {
    const response = await inventory(this.props.match.params.invId);
    this.setState({
      title: response.data.title,
    })
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    await updateTitle(this.state);
    toast.success("Inventory title updated");
    this.props.history.push(`/myinventories/${this.props.match.params.invId}`); 
  };

  render() {
    const { title } = this.state;
    return (
      <>
        <section className="Edittitle1">
          <h3>Edit Inventory</h3>

          <form onSubmit={this.handleFormSubmit}>
            <div className="Edittitle2">
              <label>Title</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="title"
                value={title}
              />
            </div>

            <div className="Twinbutts">
              <button className="Butts" type="submit">
                Edit
              </button>

              <button className="Delbutts" onClick={this.handleDeleteInventory}>
                Delete
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default EditInventory;
