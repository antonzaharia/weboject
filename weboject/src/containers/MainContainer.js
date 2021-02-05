import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Main/Header/Header";
import Content from "../components/Main/Content";
import Footer from "../components/Main/Footer";

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route exact path="/" component={Content} />
          <Route exact path="/work" component={Content} />
          <Route exact path="/tech" component={Content} />
          <Route exact path="/message-us" component={Content} />
          <Route exact path="/team" component={Content} />
        </Router>
        <Footer />
      </div>
    );
  }
}
