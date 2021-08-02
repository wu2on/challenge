import { createSelector } from "reselect";

export const selectState = (state) => state;

export const selectItemEntities = createSelector(
  selectItems,
  (state) => state.items
);
