import React from "react";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CloseIcon from "@material-ui/icons/Close";

export default function Content() {
  return (
    <div className="content">
      <div className="terminal">
        <div className="terminal-top-bar">
          <MinimizeIcon />
          <CloseIcon />
        </div>
        <div className="terminal-body"></div>
      </div>
    </div>
  );
}
