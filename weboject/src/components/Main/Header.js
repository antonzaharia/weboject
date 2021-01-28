import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import MenuListItem from "./Header/MenuListItem";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Header() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (open) => (event) => {
    setState({ ...state, bottom: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <MenuListItem text="Contact" icon={ContactMailIcon} />
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="header">
      <h1 className="logo">Weboject</h1>
      <MenuIcon
        className="menu-btn"
        fontSize="large"
        onClick={toggleDrawer(true)}
      />

      <Drawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer(false)}
      >
        {list("bottom")}
      </Drawer>
    </div>
  );
}
