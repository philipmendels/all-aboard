import { Vector } from "../models/geom/vector.model";
import { SelectedItemsState, SelectionState } from "../models/selection";
import { CardsState } from "../models/card";
import { TransformHandle } from "../components/transform-tool/transform-handle.model";
import { any } from "prop-types";

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

export const MOVE_CARDS = 'MOVE_CARDS';

export type MoveCardsAction = {
  type: typeof MOVE_CARDS,
  location: Vector,
  selectedItems: SelectedItemsState
}

export type StopMoveCardsAction = {
  type: 'STOP_MOVE_CARDS',
  location: Vector,
  selectedItems: SelectedItemsState
}

export const SCALE_CARDS = 'SCALE_CARDS';

export type ScaleCardsAction = {
  type: typeof SCALE_CARDS,
  location: Vector,
  selection: SelectionState
}

export type StopScaleCardsAction = {
  type: 'STOP_SCALE_CARDS',
  location: Vector,
  selection: SelectionState
}

export type ReorderCardAction = {
  type: 'REORDER_CARD',
  id: string,
  toIndex: number
}

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

export type MouseEnterCardAction = {
  type: 'MOUSE_ENTER_CARD';
  id: string;
}

export type MouseLeaveCardAction = {
  type: 'MOUSE_LEAVE_CARD';
}

export type AppAction =
  AddCardAction |
  RemoveCardsAction |
  SelectCardsAction |
  DeselectCardAction |
  ClearSelectionAction |
  StartMoveCardsAction |
  MoveCardsAction |
  StopMoveCardsAction |
  StartScaleCardsAction |
  ScaleCardsAction |
  StopScaleCardsAction |
  ReorderCardAction |
  MouseEnterCardAction |
  MouseLeaveCardAction;