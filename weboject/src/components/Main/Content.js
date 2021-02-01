import React, { useEffect } from "react";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { reload } from "../../actions/terminalActions";
import Column from "../Terminal/Column";
import MainHead from "../Terminal/MainHead";

function Content({ columns, reload, addLetter }) {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     reload();
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="content">
      <div className="terminal">
        <div className="terminal-top-bar">
          <MinimizeIcon />
          <CloseIcon />
        </div>
        <MainHead />
        <div className="terminal-body">
          {columns.map((column, index) => (
            <Column column={column} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  reload: () => dispatch(reload()),
});
const mapStateToProps = (state) => ({
  columns: state.columns,
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);
