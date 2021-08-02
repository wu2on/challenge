export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
      return action.items;

    default:
      return state;
  }
}
