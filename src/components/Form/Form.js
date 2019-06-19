import React from "react";
import template from "./Form.jsx";

class Form extends React.Component {
  state = {
    firstName: ""
  };

  render() {
    return template.call(this);
  }

  onFirstNameChanged = event => {
    this.setState({
      firstName: event.target.value
    });
    console.log("test: ", this.state.firstName);
  };
}

export default Form;
