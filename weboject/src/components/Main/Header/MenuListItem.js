import { Avatar } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { BrowserRouter, Redirect } from "react-router-dom";

import React, { Component } from "react";

export default class MenuListItem extends Component {
  state = {
    redirect: false,
  };
  path =
    this.props.text === "Home"
      ? "/"
      : `/${this.props.text.split(" ").join("-").toLowerCase()}`;

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <BrowserRouter>
          <Redirect push to={this.path} />
        </BrowserRouter>
      );
    }
  };

  render() {
    return (
      <ListItem button onClick={this.setRedirect}>
        {this.renderRedirect()}
        <ListItemIcon>
          <Avatar>
            <this.props.icon style={{ color: "black" }} />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={this.props.text} />
      </ListItem>
    );
  }
}
