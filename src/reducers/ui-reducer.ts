import { Reducer } from "redux";
import { UiState } from "../models/ui";
import { AppAction } from "../actions/actions";

export const uiReducer: Reducer<UiState, AppAction> = (prevState = {}, action) => {
  switch (action.type) {
    case 'MOUSE_ENTER_CARD':
      return {
        hoveredCardId: action.id
      }
    case 'MOUSE_LEAVE_CARD':
      return {
        hoveredCardId: undefined
      }
    default:
      return prevState
  }
}