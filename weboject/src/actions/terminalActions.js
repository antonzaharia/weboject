import { makeColumns } from "../helpers/terminal";

export function reload() {
  return (dispatch) => {
    dispatch({ type: "RELOAD", payload: makeColumns() });
  };
}
