import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

import ContactMailIcon from "@material-ui/icons/ContactMail";
import MenuListItem from "./MenuListItem";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";
import MessageIcon from "@material-ui/icons/Message";

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
        <MenuListItem text="Home" icon={HomeIcon} />
        <MenuListItem text="Work" icon={WorkIcon} />
        <MenuListItem text="Technologies" icon={PermDataSettingIcon} />

        <Divider />
        <MenuListItem text="Send us a message" icon={MessageIcon} />
        <MenuListItem text="Meet the Team" icon={ContactMailIcon} />
      </List>
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
