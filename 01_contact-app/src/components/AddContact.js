import React from "react";

class AddContact extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    console.log("E:", e);
  };
  render() {
    return (
      <div className="ui main" style={{ paddingTop: "10px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
