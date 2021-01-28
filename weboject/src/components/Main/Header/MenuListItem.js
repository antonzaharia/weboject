import React from "react";

import { Avatar } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function MenuListItem({ text, icon }) {
  const Icon = icon;
  const handleClick = (event) => {
    console.log(event.target.name);
  };
  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <Avatar>
          <Icon style={{ color: "black" }} />
        </Avatar>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
