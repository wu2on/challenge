export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_LOADING":
      return true;
    case "ITEMS_FETCH_DATA_ERROR":
      return false;
    case "ITEMS_FETCH_DATA_SUCCESS":
      return false;
    default:
      return state;
  }
}
