import React, { Component } from "react";
import gsap from "gsap";

export default class Letter extends Component {
  render() {
    return <div className="letter">{this.props.letter}</div>;
  }
}
