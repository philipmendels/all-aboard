import { Vector } from "../models/geom/vector.model";
import { SelectedItemsState, SelectionState } from "../models/selection";
import { CardsState } from "../models/card";
import { TransformHandle } from "../components/transform-tool/transform-handle.model";

export type AddCardAction = {
  type: 'AD_CARD',
  location: Vector
}

export type RemoveCardsAction = {
  type: 'REMOVE_CARDS',
  selectedItems: SelectedItemsState
}

export type StartMoveCardsAction = {
  type: 'START_MOVE_CARDS',
  location: Vector,
  cards: CardsState
}

export type StartScaleCardsAction = {
  type: 'START_SCALE_CARDS',
  transformHandle: TransformHandle,
  cards: CardsState
}

export type MoveCardsAction = {
  type: 'MOVE_CARDS',
  location: Vector,
  selectedItems: SelectedItemsState
}

export type ScaleCardsAction = {
  type: 'SCALE_CARDS',
  location: Vector,
  selection: SelectionState
}

// export type ReorderCardAction = {
//   type: 'REORDER_CARD',
//   id: string,
//   toIndex: number
// }

export type SelectCardsAction = {
  type: 'SELECT_CARDS',
  ids: string[]
}

export type DeselectCardAction = {
  type: 'DESELECT_CARD',
  id: string
}

export type ClearSelectionAction = {
  type: 'CLEAR_SELECTION'
}

export type AppAction =
  AddCardAction |
  RemoveCardsAction |
  SelectCardsAction |
  DeselectCardAction |
  ClearSelectionAction |
  StartMoveCardsAction |
  MoveCardsAction |
  StartScaleCardsAction |
  ScaleCardsAction;

