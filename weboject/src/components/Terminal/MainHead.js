import React, { Component } from "react";
import gsap from "gsap";

export default class MainHead extends Component {
  text = "Welcome to Weboject".split("");
  show = "";
  count = 0;

  componentDidMount() {
    setInterval(() => {
      gsap.to(".typer", { opacity: 0 });
      if (this.count < this.text.length) {
        this.show = `${this.show}${this.text[this.count]}`;
        this.count++;
      }
    }, 300);
    setInterval(() => {
      gsap.to(".typer", { opacity: 1 });
    }, 1000);
  }
  render() {
    return (
      <div className="main-head">
        <h1>
          {this.show}
          <span className="typer">_</span>
        </h1>
      </div>
    );
  }
}
