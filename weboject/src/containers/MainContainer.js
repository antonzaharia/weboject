import React, { Component } from "react";
import Header from "../components/Main/Header";
import Content from "../components/Main/Content";
import Footer from "../components/Main/Footer";

export default class MainContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}
