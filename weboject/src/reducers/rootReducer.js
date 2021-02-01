import { makeColumns, randomNumber, ABC } from "../helpers/terminal";

export default function rootReducer(
  state = { columns: makeColumns() },
  action
) {
  switch (action.type) {
    case "RELOAD":
      return { ...state, columns: action.payload };
    case "ADD_LETTER":
      let letterAdded = state.columns.map((column) => {
        if (column.id === action.payload) {
          let newColumn = column.column;
          newColumn.push(ABC[randomNumber()]);
          return {
            id: column.id,
            column: newColumn,
          };
        } else {
          return column;
        }
      });
      return {
        ...state,
        columns: letterAdded,
      };
    default:
      return state;
  }
}
