import React    from "react";
import template from "./Welcome.jsx";

class Welcome extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Welcome;
