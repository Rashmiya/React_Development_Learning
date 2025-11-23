import React from "react";

// React Hooks Cannot be used inside the class components.
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  onSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior of form submission (protect from refresh the page)
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" }); // clear the input fields after submission
    // console.log(this.state);
  };

  render() {
    return (
      <div className="ui main" style={{ paddingTop: "10px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
