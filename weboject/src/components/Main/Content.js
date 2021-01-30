import React from "react";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CloseIcon from "@material-ui/icons/Close";
import { makeColumns } from "../../helpers/terminal";

export default function Content() {
  return (
    <div className="content">
      <div className="terminal">
        <div className="terminal-top-bar">
          <MinimizeIcon />
          <CloseIcon />
        </div>
        <div className="terminal-body">{makeColumns()}</div>
      </div>
    </div>
  );
}
