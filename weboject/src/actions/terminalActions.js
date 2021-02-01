import { makeColumns } from "../helpers/terminal";

export function addLetter(id) {
  return (dispatch) => {
    dispatch({ type: "ADD_LETTER", payload: id });
  };
}
export function removeLetter(id) {
  return (dispatch) => {
    dispatch({ type: "REMOVE_LETTER", payload: id });
  };
}

export function reload() {
  return (dispatch) => {
    dispatch({ type: "RELOAD", payload: makeColumns() });
  };
}
