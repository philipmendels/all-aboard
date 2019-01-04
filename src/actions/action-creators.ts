import { Vector } from "../models/geom/vector.model";
import {
  StartMoveCardsAction, MoveCardsAction, SelectCardsAction,
  DeselectCardAction, ClearSelectionAction, AppAction, 
  AddCardAction, RemoveCardsAction, StartScaleCardsAction, 
  ScaleCardsAction, ReorderCardAction, StopMoveCardsAction, 
  StopScaleCardsAction, MouseEnterCardAction, MouseLeaveCardAction
} from "./actions";
import { ThunkAction } from 'redux-thunk';
import { BoardState } from "../models/board";
import { TransformHandle } from "../components/transform-tool/transform-handle.model";

type TypedThunkAction<A extends AppAction> = ThunkAction<A, BoardState, null, AppAction>;

export const addCard = (location: Vector): AddCardAction => ({
  type: 'AD_CARD',
  location
});

export const removeCards = (): TypedThunkAction<RemoveCardsAction> =>
  (dispatch, getState) => dispatch({
    type: 'REMOVE_CARDS',
    selectedItems: getState().selection.items
  });

export const startMoveCards = (location: Vector): TypedThunkAction<StartMoveCardsAction> =>
  (dispatch, getState) => dispatch({
    type: 'START_MOVE_CARDS',
    location,
    cards: getState().cards.present,
  });

export const startScaleCards = (transformHandle: TransformHandle): TypedThunkAction<StartScaleCardsAction> =>
  (dispatch, getState) => dispatch({
    type: 'START_SCALE_CARDS',
    transformHandle,
    cards: getState().cards.present,
  });

export const moveCards = (location: Vector): TypedThunkAction<MoveCardsAction> =>
  (dispatch, getState) => dispatch({
    type: 'MOVE_CARDS',
    location,
    selectedItems: getState().selection.items
  });

export const stopMoveCards = (location: Vector): TypedThunkAction<StopMoveCardsAction> =>
  (dispatch, getState) => dispatch({
    type: 'STOP_MOVE_CARDS',
    location,
    selectedItems: getState().selection.items
  });

export const reorderCard = (id: string, toIndex: number): ReorderCardAction => ({
  type: 'REORDER_CARD',
  id,
  toIndex
});

export const scaleCards = (location: Vector): TypedThunkAction<ScaleCardsAction> =>
  (dispatch, getState) => dispatch({
    type: 'SCALE_CARDS',
    location,
    selection: getState().selection
  });

export const stopScaleCards = (location: Vector): TypedThunkAction<StopScaleCardsAction> =>
  (dispatch, getState) => dispatch({
    type: 'STOP_SCALE_CARDS',
    location,
    selection: getState().selection
  });

export const selectCards = (ids: string[]): SelectCardsAction => ({
  type: 'SELECT_CARDS',
  ids
});

export const deselectCard = (id: string): DeselectCardAction => ({
  type: 'DESELECT_CARD',
  id
});

export const clearSelection = (): ClearSelectionAction => ({
  type: 'CLEAR_SELECTION'
});

export const mouseEnterCard = (id:string): MouseEnterCardAction => ({
  type: 'MOUSE_ENTER_CARD',
  id
});

export const mouseLeaveCard = (): MouseLeaveCardAction => ({
  type: 'MOUSE_LEAVE_CARD',
});