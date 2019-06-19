import "./Welcome.scss";
import React from "react";

function template() {
  return (
    <div className="welcome">
      <h1>Welcome, {this.props.firstName}</h1>
    </div>
  );
};

export default template;
