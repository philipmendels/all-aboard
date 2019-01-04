import { CardsState } from "./card";
import { SelectionState } from "./selection";
import { StateWithHistory } from "redux-undo";
import { UiState } from "./ui";

export type BoardState = {
  cards: StateWithHistory<CardsState>;
  selection: SelectionState;
  ui: UiState
};
