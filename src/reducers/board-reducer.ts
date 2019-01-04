import { BoardState } from "../models/board";
import { combineReducers } from "redux";
import { cardsReducer } from "./cards-reducer";
import { selectionReducer } from "./selection-reducer";
import undoable, { excludeAction } from 'redux-undo';
import { MOVE_CARDS, SCALE_CARDS } from "../actions/actions";
import { uiReducer } from "./ui-reducer";

export const BoardReducer = combineReducers<BoardState>({
  cards: undoable(cardsReducer, { filter: excludeAction([MOVE_CARDS, SCALE_CARDS])}),
  selection: selectionReducer,
  ui: uiReducer
});
