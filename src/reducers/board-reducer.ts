import { BoardState } from "../models/board";
import { combineReducers } from "redux";
import { cardsReducer } from "./cards-reducer";
import { selectionReducer } from "./selection-reducer";

export const BoardReducer = combineReducers<BoardState>({
  cards: cardsReducer,
  selection: selectionReducer
});
