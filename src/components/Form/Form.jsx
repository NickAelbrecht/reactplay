import "./Form.scss";
import React from "react";
import Welcome from "../Welcome/Welcome";

function template() {
  return (
    <div className="form">
      <input type="text" name="firstName" onChange={this.onFirstNameChanged} />
      <Welcome firstName={this.state.firstName}/>
    </div>
  );
}

export default template;
