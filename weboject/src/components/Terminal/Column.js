import gsap from "gsap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { removeLetter } from "../../actions/terminalActions";
import { addLetter } from "../../actions/terminalActions";
import { randomNumber } from "../../helpers/terminal";
import Letter from "./Letter";

class Column extends Component {
  componentDidMount() {
    setInterval(() => {
      if (this.props.column.column.length > randomNumber() - 2) {
        gsap.to(".letter", { opacity: 0.5, duration: 1 });
        this.props.removeLetter(this.props.column.id);
      } else {
        this.props.addLetter(this.props.column.id);
      }
    }, 100);
  }
  render() {
    return (
      <div className="column">
        {this.props.column.column.map((letter, index) => (
          <Letter letter={letter} key={index} />
        ))}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  removeLetter: (id) => dispatch(removeLetter(id)),
  addLetter: (id) => dispatch(addLetter(id)),
});
export default connect(null, mapDispatchToProps)(Column);
