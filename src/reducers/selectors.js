import { createSelector } from "reselect";

const nest = (items, id = 0, link = "parent_id") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id) }));

export const selectState = (state) => state;

export const selectItemEntities = createSelector(
  selectState,
  (state) => state.items
);

export const selectFilteredItems = createSelector(
  [selectItemEntities],
  (itemEntities) => nest(itemEntities)
);
