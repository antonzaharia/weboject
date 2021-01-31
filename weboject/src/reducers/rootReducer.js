import { makeColumns } from "../helpers/terminal";

export default function rootReducer(
  state = { columns: makeColumns() },
  action
) {
  switch (action.type) {
    case "RELOAD":
      return { ...state, columns: action.payload };
    default:
      return state;
  }
}
