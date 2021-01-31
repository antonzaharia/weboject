import React from "react";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { reload } from "../../actions/terminalActions";

function Content({ columns, reload }) {
  window.setInterval(function () {
    reload();
  }, 5000);

  return (
    <div className="content">
      <div className="terminal">
        <div className="terminal-top-bar">
          <MinimizeIcon />
          <CloseIcon />
        </div>
        <div className="terminal-body">
          {columns.map((column, index) => (
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

const mapDispatchToProps = (dispatch) => ({
  reload: () => dispatch(reload()),
});
const mapStateToProps = (state) => ({
  columns: state.columns,
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);
