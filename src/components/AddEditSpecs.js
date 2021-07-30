import React from "react";
import { itemSpecs, deleteItem, uploadFile, inventory } from "../api";
import { toast } from "react-toastify";

class AddEditSpecs extends React.Component {
  state = {
    listItems: [],
    designation: "",
    category: "",
    quantity: "",
    description: "",
    location: "",
    imageUrl: "",
  };

  async componentDidMount() {
    const response = await inventory(this.props.match.params.invId);
     const item = response.data.listItems.filter((item) => item._id === this.props.match.params.itemId);
     
     this.setState({
      designation: item[0].designation,
    });
  }
  handleDeleteItem = async () => {
    await deleteItem(this.props.match.params.invId, this.props.match.params.itemId);
    toast.success("Item deleted");
    this.props.history.push(`/myinventories/${this.props.match.params.invId}`);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const uploadData = new FormData();
    uploadData.append("image", this.state.imageUrl);

    const response = await uploadFile(uploadData);

    const specs = {
      designation: this.state.designation,
      category: this.state.category,
      quantity: this.state.quantity,
      description: this.state.description,
      location: this.state.location,
      imageUrl: response.data.fileUrl,
    };

    await itemSpecs(
      this.props.match.params.invId,
      this.props.match.params.itemId,
      specs
    );
    // console.log(newInv);
    toast.success("Specs added");
    this.props.history.push(`/myinventories/${this.props.match.params.invId}`);
  };

  handleChangeFile = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  render() {
    const { designation, category, quantity, description, location } =
      this.state;
    return (
      <>
        <section className="Inventories">
          <h3>
            Add/Edit Specifications to <em>{designation}</em>
          </h3>
          <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
            <div className="Longfill">
              <label>Item</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="designation"
                value={designation}
              />
            </div>
            <div className="Longfill">
              <label>Category</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="category"
                value={category}
              />
            </div>
            <div className="Longfill">
              <label>Quantity</label>
              <input
                type="number"
                onChange={this.handleChange}
                name="quantity"
                value={quantity}
              />
            </div>
            <div className="Longfill">
              <label>Description</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="description"
                value={description}
              />
            </div>
            <div className="Longfill">
              <label>Location</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="location"
                value={location}
              />
            </div>
            <div className="Longfill">
              <label>Image</label>
              <input
                type="file"
                name="image"
                onChange={this.handleChangeFile}
              />
            </div>
            <div>
              <button className="Butts" type="submit">
                Add/Edit
              </button>
            </div>
          </form>
          <div className="Twinbutts">
            <button className="Delbutts" onClick={this.handleDeleteItem}>
              Delete
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default AddEditSpecs;

// http://localhost:3000/myinventories/61012cb20d07100015a7a7ba/itemspecs/61012cbf0d07100015a7a7bc
