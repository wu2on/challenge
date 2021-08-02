export default function errorReducer(state = "", action) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_ERROR":
      return action.error;

    default:
      return state;
  }
}
