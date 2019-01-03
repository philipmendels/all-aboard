import { initialCardsState, CardsState } from "./card";
import { SelectedItem, initialSelectionState } from "./selection";
import { Bounds } from "./geom/bounds.model";
import { TransformHandle } from "../components/transform-tool/transform-handle.model";
import { StateWithHistory } from "redux-undo";

export type BoardState = {
  cards: StateWithHistory<CardsState>;
  selection: SelectionState;
}

// export const initialBoardState: BoardState = {
//   cards: initialCardsState,
//   selection: initialSelectionState
// }

type SelectionState = {
  action: {} | ScaleActionState,
  items: SelectedItemsState
}

type ScaleActionState = {
  scaleStartBounds: Bounds,
  scaleTransformHandle: TransformHandle
}

type SelectedItemsState = {
  [id: string]: SelectedItem
}