import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Main/Header/Header";
import Content from "../components/Main/Content";
import Footer from "../components/Main/Footer";
import Technologies from "./Technologies";

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route exact path="/" component={Content} />
          <Route path="/work" component={Content} />
          <Route path="/technologies" component={Technologies} />
          <Route path="/send-us-a-message" component={Content} />
          <Route path="/meet-the-team" component={Content} />
        </Router>
        <Footer />
      </div>
    );
  }
}
