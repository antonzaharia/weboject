import { makeColumns, randomNumber, ABC } from "../helpers/terminal";

export default function rootReducer(
  state = { columns: makeColumns() },
  action
) {
  switch (action.type) {
    case "RELOAD":
      return { ...state, columns: action.payload };
    case "ADD_LETTER":
      let columnsToAdd = state.columns.filter(
        (arr) => arr.id !== action.payload
      );
      let arrToAdd = state.columns.find((arr) => arr.id === action.payload);
      arrToAdd.column.push(ABC[randomNumber()]);
      console.log(arrToAdd);
      return { ...state, columns: [...columnsToAdd, arrToAdd] };
    default:
      return state;
  }
}
