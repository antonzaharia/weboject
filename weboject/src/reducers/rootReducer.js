export default function rootReducer(state = { page: null }, action) {
  switch (action.type) {
    case "SOMETHING":
      return state;
    default:
      return state;
  }
}
