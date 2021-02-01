import React, { Component } from "react";
import { connect } from "react-redux";
import { addLetter } from "../../actions/terminalActions";

class Column extends Component {
  componentDidMount() {}
  render() {
    return (
      <div
        className="column"
        onClick={() => this.props.addLetter(this.props.column.id)}
      >
        {this.props.column.column.map((letter, index) => (
          <div className="letter" key={index}>
            {letter}
          </div>
        ))}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addLetter: (id) => dispatch(addLetter(id)),
});
export default connect(null, mapDispatchToProps)(Column);
