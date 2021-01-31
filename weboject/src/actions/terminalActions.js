import { makeColumns } from "../helpers/terminal";

export function reload() {
  dispatch({ type: "RELOAD", action: makeColumns() });
}
