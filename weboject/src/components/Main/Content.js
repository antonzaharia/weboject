import React from "react";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CloseIcon from "@material-ui/icons/Close";
import { makeColumns } from "../../helpers/terminal";

export default function Content() {
  let generatedColumns = makeColumns();
  const interval = () => {
    window.setInterval(function () {
      generatedColumns = makeColumns();
    }, 2000);
  };
  return (
    <div className="content">
      <div className="terminal">
        <div className="terminal-top-bar">
          <MinimizeIcon />
          <CloseIcon />
        </div>
        <div className="terminal-body">
          {generatedColumns.map((column, index) => (
            <div className="column" key={`${index}id`}>
              {column.map((letter, index) => (
                <div key={index}>{letter}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
