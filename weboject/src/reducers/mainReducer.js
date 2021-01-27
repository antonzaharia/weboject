export default function MainReducer(state = { page: null }, action) {
  switch (action.type) {
    case "SOMETHING":
      return state;
    default:
      return state;
  }
}
