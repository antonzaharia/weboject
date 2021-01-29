import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";
import gsap from "gsap";

export default class App extends Component {
  componentDidMount() {
    gsap.to("#loading", { opacity: 0 });
  }
  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}
