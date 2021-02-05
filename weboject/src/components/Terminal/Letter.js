import React, { Component } from "react";

export default class Letter extends Component {
  render() {
    return <div className="letter">{this.props.letter}</div>;
  }
}
