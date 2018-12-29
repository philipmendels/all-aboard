import { Vector } from "../models/geom/vector.model";
import { 
  StartMoveCardsAction, MoveCardsAction, SelectCardsAction, 
  DeselectCardAction, ClearSelectionAction, AppAction 
} from "./actions";
import { ThunkAction } from 'redux-thunk';
import { BoardState } from "../models/board";

type TypedThunkAction<A extends AppAction> = ThunkAction<A, BoardState, null, AppAction>;

// export const addCard = (location: Vector): BoardActions.AddCardAction => ({
//     type: 'AD_CARD',
//     location
// });

// export const removeCards = (): BoardActions.RemoveCardsAction => ({
//     type: 'REMOVE_CARDS'
// });

export const startMoveCards = (location: Vector): TypedThunkAction<StartMoveCardsAction> => 
(dispatch, getState) => dispatch({
  type: 'START_MOVE_CARDS',
  location,
  cards: getState().cards,
});

// export const startScaleCards = (transformHandle:TransformHandle): BoardActions.StartScaleCardsAction => ({
//     type: 'START_SCALE_CARDS',
//     transformHandle
// });

export const moveCards = (location: Vector): TypedThunkAction<MoveCardsAction> => 
  (dispatch, getState) => dispatch({
  type: 'MOVE_CARDS',
  location,
  selectedItems: getState().selection.items
});

// export const reorderCard = (id:string, toIndex:number): BoardActions.ReorderCardAction => ({
//     type: 'REORDER_CARD',
//     id,
//     toIndex
// });

// export const scaleCards = (location: Vector): BoardActions.ScaleCardsAction => ({
//     type: 'SCALE_CARDS',
//     location
// });

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