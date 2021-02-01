import React, { Component } from "react";

import gsap from "gsap";

export default class Column extends Component {
  componentDidUpdate() {
    gsap.fromTo(".column", { opacity: 1 }, { opacity: 0.2, duration: 0.5 });
    gsap.to(".letter", { marginTop: 10, duration: 0.5 });
  }
  render() {
    return (
      <div className="column">
        {this.props.column.map((letter, index) => (
          <div className="letter" key={index}>
            {letter}
          </div>
        ))}
      </div>
    );
  }
}
