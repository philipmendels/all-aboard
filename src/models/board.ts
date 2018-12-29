import { initialCardsState, CardsState } from "./card";
import { SelectedItem, initialSelectionState } from "./selection";

export type BoardState = {
  cards: CardsState;
  selection: SelectionState;
}

export const initialBoardState: BoardState = {
  cards: initialCardsState,
  selection: initialSelectionState
}

type SelectionState = {
  // action: {} | ScaleActionState,
  items: SelectedItemsState
}

// type ScaleActionState = {
//   scaleStartBounds: Bounds,
//   scaleTransformHandle: TransformHandle
// }

type SelectedItemsState = {
  [id: string]: SelectedItem
}